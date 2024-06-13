import * as React from "react";
import { CProps } from "pages/portfolio";

type TierLevel = "S" | "A" | "B" | "C" | "D";

type TierProps = {
    tier: TierLevel;
    children: React.ReactNode;
}

const Square = ({ className, children }: CProps) => {
    return (
        <div className={`${className} h-16 w-16 flex-shrink-0`}>
            {children}
        </div>
    );
}

// TODO: fix type error
const Language = ({ lang }: { lang: string }) => {
    const style = "devicon-" + lang + "-plain-colored";
    return (
        <Square className="p-1">
            <i className={style} />
        </Square>
    )
}

const Rank = ({ tier }: { tier: TierLevel }) => {
    let style = "bg-primary";

    // Precompiled styles were not playing nicely so needed a switch
    switch (tier) {
        case "S": style = "bg-tierS"; break;
        case "A": style = "bg-tierA"; break;
        case "B": style = "bg-tierB"; break;
        case "C": style = "bg-tierC"; break;
        case "D": style = "bg-tierD"; break;
    }

    return (
        <Square className={style + " flex justify-center items-center"}>
            <span className="text-background">{tier}</span>
        </Square>
    );
}


const Tier = ({ tier, children }: TierProps) => {
    const bg = "bg-tier" + (tier as string);
    return (
        <div className="flex space-x-2">
            <Rank tier={tier} />
            <div className="w-full bg-lighterBackground">
                {children}
            </div>
        </div>
    );
}

const Tierlist = () => {
    return (
        <div className="w-full">
            <div className="flex-col bg-lightBackground p-2 space-y-2">
                <Tier tier="S">
                    <Square className="bg-primary">
                        <span>hi</span>
                    </Square>
                </Tier>
                <Tier tier="A">A Tier</Tier>
                <Tier tier="B">B Tier</Tier>
                <Tier tier="C">C Tier</Tier>
                <Tier tier="D">D Tier</Tier>
            </div>
        </div>
    )
}

export default Tierlist;
