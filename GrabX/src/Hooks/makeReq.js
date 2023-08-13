import axios from "axios";

const makeReq = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}` }
});

export default makeReq;