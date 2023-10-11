import axios from "axios";

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_PORT_PROJECT_BACKEND}`,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});


