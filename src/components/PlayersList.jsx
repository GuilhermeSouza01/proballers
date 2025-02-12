import { useEffect } from "react";
import { usePlayers } from "../context/PlayerContext";
import Heading from "../ui/Heading";
import PlayerCard from "../ui/PlayerCard";
import Spinner from "../ui/Spinner";

const PlayersList = () => {
    const { players, loading } = usePlayers();

    if (loading) {
        return <Spinner />;
    }

    if (players.length === 0) {
        return <div className="text-white text-center">No players found.</div>;
    }

    return (
        <div className="mt-4 ml-8">
            <Heading title="Players" />
            <div className="flex flex-wrap gap-5 justify-start">
                {players.map((playerData) => (
                    <PlayerCard
                        key={playerData.player.id}
                        player={playerData.player}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlayersList;
