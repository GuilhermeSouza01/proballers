import api from "./api";

export const fetchPlayer = async (playerId) => {
    try {
        const response = await api.get(`/players/profiles?player=${playerId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar jogador:", error);
        return null;
    }
};
