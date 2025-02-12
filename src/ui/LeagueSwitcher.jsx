import Button from "./Button";
import { usePlayers } from "../context/PlayerContext";
import { useState } from "react";

const leagues = [
    { id: 39, name: "Premier League" },
    { id: 140, name: "La Liga" },
    { id: 135, name: "Serie A" },
    { id: 78, name: "Bundesliga" },
    { id: 2, name: "UEFA Champions League" },
];

const LeagueSwitcher = () => {
    const { selectedLeague, setSelectedLeague } = usePlayers();

    const handleLeagueChange = (id) => {
        setSelectedLeague(id);
    };

    return (
        <section className="py-4 px-4 border-b border-[#434343]/50 flex flex-wrap justify-around">
            {leagues.map((league) => (
                <Button
                    key={league.id}
                    league={league.name}
                    onClick={() => handleLeagueChange(league.id)}
                    isActive={selectedLeague === league.id}
                />
            ))}
        </section>
    );
};

export default LeagueSwitcher;
