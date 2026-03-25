import axios from "axios";

export default function BackendConnector() {
    const backendInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        withCredentials: true
    });

    backendInstance.interceptors.request.use(
        config => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers["Authorization"] = `Bearer ${ token }`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    return { backendInstance };
}