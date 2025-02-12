import api from "./api";

export const fetchPlayer = async (playerId) => {
    try {
        const response = await api.get(`/players/profiles?player=${playerId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar jogador:", error);
        return null;
    }
};

export const fetchPlayersByLeague = async (leagueId) => {
    try {
        const response = await api.get(
            `/players?league=${leagueId}&season=2023`
        );
        console.log(response.data.response);
        return response.data.response;
    } catch (error) {
        console.error("Erro ao buscar jogadores:", error);
        return [];
    }
};
