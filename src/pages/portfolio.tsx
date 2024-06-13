import * as React from "react";
import { PageProps } from "gatsby";
import WavingHand from "@components/WavingHand";
import headshot from "@images/headshot.jpeg";
import Tierlist from "@components/Tierlist";
// import spectre from "@images/spectre.jpeg";

// const section = "flex justify-between w-full p-20"

export type CProps = {
    className?: string;
    children: React.ReactNode
}

const ColoredCard = ({ className, children }: CProps) => (
    <div className={`flex-1s ${className} px-6 py-6 rounded-3xl`}>
        {children}
    </div>
)

const Page = ({ children }: CProps) => (
    <main className="bg-background text-foreground w-full z-10 p-6">
        {children}
    </main>
)


const PortfolioPage: React.FC<PageProps> = () => {
    return (
        <Page>
            {/* hero section */}
            <div className="flex w-full p-20 items-center bg-lightBackground rounded-3xl">
                <div className="flex-1 text-8xl font-bold">
                    <div className="flex">
                        <h1 className="pr-2">Hi!</h1>
                        <WavingHand />
                    </div>
                    <div className="h-8" />
                    <h1>I'm <span className="text-primary font-black">Adam</span></h1>
                </div>
                <div className="flex-1 flex justify-end">
                    <img className="rounded-full size-72" src={headshot} alt="headshot" />
                </div>
            </div>
            {/* split section */}
            <div className="flex w-full py-6">
                <ColoredCard className="bg-tertiary">
                    <span>
                        I'm currently pursuing a bachelor degree in Computer Science at NC State, with a concentration
                        in Artifical Intelligence. I've learned a lot, and built a ton of cool stuff along the way.
                        Stick around and I'll show you some highlights.
                        <br /><br />
                        If you'd think that I'd be a good fit for your team,
                        then <a className="underline font-bold" href="#">don't hesitate to reach out</a>. I won't bite :)
                    </span>
                </ColoredCard>
                <div className="flex-shrink w-6" />
                <ColoredCard className="bg-secondary">
                    <span>
                        I'm a engineer with a passion for creating what many call "software". I don't like that term.
                        It's too cold and vague, and it doesn't capture the essence of what I build or why I build it.
                        <br /><br />
                        I prefer to think of my work as somewhere between art and magic. A simple spell
                        to make your life easier, or a beautiful creation you can interact with.
                    </span>
                </ColoredCard>
            </div>
            {/* tierlist section */}
            <div className="flex w-full p-20 items-center">
                <Tierlist />
            </div>
        </Page>
    );
};

export default PortfolioPage;
