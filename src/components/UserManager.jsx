import BackendConnector from "./BackendConnector";

export default function UserManager() {

    const userLogin = async (email, password) => {
        await BackendConnector.post("/login", {
            email: email,
            password: password
        }).then(response => {
            if (response.data.status == "success") {
                console.log("Login");
            }
        });
    }

    const userRegister = async (name, email, role, password) => {
        await BackendConnector.post("/register-user", {
            name, email, role, password
        }).then(response => {
            if (response.data.status == "success") {
                console.log("registered");
            }
        });
    }

    return { userLogin, userRegister };
}