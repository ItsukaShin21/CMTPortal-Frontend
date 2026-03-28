import BackendConnector from "./BackendConnector";
import toast, { Toaster } from "react-hot-toast";

export default function UserManager() {

    const userLogin = async (email, password) => {
        await BackendConnector.post("/login", {
            email: email,
            password: password
        }).then(response => {
            if (response.data.status == "success") {
                toast.success("Logged in successfully");
            }
        });
    }

    const userRegister = async (name, email, role, password) => {
        await BackendConnector.post("/register-user", {
            name, email, role, password
        }).then(response => {
            if (response.data.status == "success") {
                toast.success(response.data.message);
            }
        }).catch(error => {
            toast.error(error.response.data.message);
        });
    }

    return { userLogin, userRegister };
}