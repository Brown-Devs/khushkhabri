"use client";

import { useEffect, useState } from "react";
import TimeBox from "./TimeBox";

export default function CountdownSection({ weddingDate }) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTargetDate() {
        const date = new Date(weddingDate);

        // Set 7 PM
        date.setHours(19, 0, 0, 0);

        return date;
    }

    function getTimeLeft() {
        const target = getTargetDate();
        const now = new Date();

        const diff = target - now;

        if (diff <= 0) {
            return { days: 0, hours: 0, mins: 0, secs: 0 };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            mins: Math.floor((diff / (1000 * 60)) % 60),
            secs: Math.floor((diff / 1000) % 60),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full">

            {/* Sticker */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-10">
                <img
                    src="/templates/sikh/scooter.png"
                    alt="sticker"
                    className="w-[260px]"
                />
            </div>

            {/* Background */}
            <div
                className="pt-28 pb-24 text-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg/blue-texture.png')",
                }}
            >

                <p className="text-[#2c2c2c] italic">
                    and the Countdown begins...
                </p>

                {/* Countdown */}
                <div className="flex justify-center gap-6 mt-6">

                    <TimeBox value={timeLeft.days} label="days" />
                    <TimeBox value={timeLeft.hours} label="hours" />
                    <TimeBox value={timeLeft.mins} label="mins" />
                    <TimeBox value={timeLeft.secs} label="secs" />

                </div>

                {/* Clock */}
                <div className="mt-10 flex justify-center">
                    <img
                        src="/templates/sikh/clock.png"
                        alt="clock"
                        className="w-[200px]"
                    />
                </div>

            </div>
        </section>
    );
}