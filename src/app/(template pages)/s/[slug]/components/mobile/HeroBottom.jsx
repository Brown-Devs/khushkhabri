export default function HeroBottom({ invitation }) {
    const { bride, groom, side } = invitation?.weddingDetails || {};

    return (
        <section className="absolute bottom-50 left-0 w-full pb-10 text-center text-white px-6">

            <img
                src="/templates/sikh/khanda.png"
                alt="khanda"
                className="w-auto h-32 mx-auto mb-6"
            />

            <div className="space-y-4">

                <p className="text-xl">
                    {side === 'groom' ? (
                        <>
                            Sardar {groom?.father} <br />
                            Sardani {groom?.mother}
                        </>
                    ) : (
                        <>
                            Sardar {bride?.father} <br />
                            Sardani {bride?.mother}
                        </>
                    )}
                </p>

                <h2 className="text-4xl font-script italic">
                    Invites you
                </h2>

                <p>
                    to join the wedding celebration of their{" "}
                    {side === 'groom' ? 'son' : 'daughter'}
                </p>

                <h3 className="text-4xl font-script">
                    {side === 'groom' ? groom?.name : bride?.name}
                </h3>

                <p>with</p>

                <h3 className="text-4xl font-script">
                    {side === 'groom' ? bride?.name : groom?.name}
                </h3>
                
  <p className="text-lg mt-4">
                        {side === 'groom' ? 'daughter of' : 'son of'}
                    </p>

                    <p className="text-2xl mt-1 ">
                        {side === 'groom' ? (
                            <>
                                Sardar {bride?.father || 'Father'} &<br />
                                Sardami {bride?.mother || 'Mother'}
                            </>
                        ) : (
                            <>
                                Sardar {groom?.father || 'Father'} &<br />
                                Sardami {groom?.mother || 'Mother'}
                            </>
                        )}
                    </p>
            </div>
        </section>
    );
}