/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { fetchPlayersByLeague, fetchPlayer } from "../services/apiPlayers";

const PlayerContext = createContext();

export const usePlayers = () => useContext(PlayerContext);

export const PlayersProvider = ({ children }) => {
    const [selectedLeague, setSelectedLeague] = useState(39);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPlayers = async () => {
        setLoading(true);
        const players = await fetchPlayersByLeague(selectedLeague);
        console.log(players);
        setPlayers(players);
        setLoading(false);
    };

    useEffect(() => {
        if (players.length === 0 || players.selectedLeague !== selectedLeague) {
            fetchPlayers();
        }
    }, [selectedLeague]);

    return (
        <PlayerContext.Provider
            value={{
                selectedLeague,
                setSelectedLeague,
                players,
                fetchPlayers,
                loading,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
};
