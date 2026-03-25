import BackendConnector from "./BackendConnector.jsx"

export default function UserManager() {
    const { backendInstance } = BackendConnector();

    const userLogin = async (email, password) => {
        await backendInstance.post("/login", {
            email: email,
            password: password
        }).then(response => {
            if (response.data.status == "success") {
                console.log("Login");
            }
        });
    }

    return { userLogin };
}