"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer({ url }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!url || !audioRef.current) return;

        const audio = audioRef.current;
        audio.load();

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        // STRATEGY: Start muted to allow autoplay, then unmute on first interaction
        audio.muted = true;
        
        const attemptPlay = () => {
            audio.play().then(() => {
                // Autoplay started (muted)
            }).catch(err => {
                console.log("Autoplay blocked even when muted:", err);
            });
        };

        attemptPlay();

        const handleInteraction = () => {
            audio.muted = false;
            // If it was already playing muted, it stays playing unmuted.
            // If it was blocked, this interaction allows it to start.
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(err => console.error("Interaction play failed:", err));

            ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(event => 
                window.removeEventListener(event, handleInteraction)
            );
        };

        ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(event => 
            window.addEventListener(event, handleInteraction, { once: true })
        );

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            ['click', 'touchstart', 'scroll', 'mousedown', 'keydown'].forEach(event => 
                window.removeEventListener(event, handleInteraction)
            );
        };
    }, [url]);

    const togglePlay = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!audioRef.current) return;
        
        // Ensure unmuted when user manually interacts
        audioRef.current.muted = false;

        if (audioRef.current.paused) {
            audioRef.current.play().catch(err => console.error("Play failed:", err));
        } else {
            audioRef.current.pause();
        }
    };

    if (!url) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <audio 
                ref={audioRef} 
                src={url} 
                loop 
                preload="auto" 
                playsInline
                autoPlay
                muted
            />
            <button
                onClick={togglePlay}
                type="button"
                className="w-12 h-12 bg-white/95 backdrop-blur-md border border-[#8b2c3c]/20 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[#8b2c3c] hover:bg-[#8b2c3c] hover:text-white transition-all transform active:scale-95 group relative overflow-visible"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                {/* Visual playing indicator */}
                {isPlaying ? (
                    <div className="flex items-center gap-[3px]">
                        <div className="w-[3px] h-3 bg-current animate-[music-bar_0.8s_ease-in-out_infinite] rounded-full" />
                        <div className="w-[3px] h-5 bg-current animate-[music-bar_1.2s_ease-in-out_infinite] rounded-full" />
                        <div className="w-[3px] h-4 bg-current animate-[music-bar_0.6s_ease-in-out_infinite] rounded-full" />
                    </div>
                ) : (
                    <div className="relative">
                        <Play size={20} className="ml-0.5 fill-current" />
                        <div className="absolute inset-0 bg-[#8b2c3c]/20 rounded-full blur-xl animate-pulse -z-10" />
                    </div>
                )}

                {/* Animated Rings to encourage interaction */}
                {!isPlaying && (
                    <>
                        <div className="absolute inset-0 rounded-full border-2 border-[#8b2c3c]/30 animate-ping opacity-75" />
                        <div className="absolute inset-[-4px] rounded-full border border-[#8b2c3c]/10 animate-[ping_2s_linear_infinite]" />
                    </>
                )}
                
                {/* Floating Tooltip */}
                <div className="absolute right-14 py-2.5 px-4 bg-gray-900/95 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-2xl border border-white/10 -translate-x-2 group-hover:translate-x-0">
                    {isPlaying ? 'Pause Music' : 'Play Music'}
                </div>
            </button>

            <style jsx>{`
                @keyframes music-bar {
                    0%, 100% { height: 8px; }
                    50% { height: 18px; }
                }
            `}</style>
        </div>
    );
}
