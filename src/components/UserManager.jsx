import React from 'react'
import BackendConnector from "./BackendConnector.jsx"

export default function UserManager() {
    const { backendInstance } = BackendConnector();

    const userLogin = async (email, password) => {
        await backendInstance.post("/login", {
            email: email,
            password: password
        }).then(response => {
            if(response.data.token) {
                backendInstance.defaults.headers.common["Authorization"] = `Bearer ${ response.data.token }`;
            } else {
                console.log("Login failed: No token recieved");
            }
        });
    }

    return { userLogin };
}