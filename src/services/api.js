import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "x-apisports-key": import.meta.env.VITE_API_KEY,
    },
});

export default api;
