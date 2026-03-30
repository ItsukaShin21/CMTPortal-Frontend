import "../css/LoginPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import UserManager from "../components/UserManager"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router"

export default function LoginPage() {
    const [seePassword, setSeePassword] = useState("password");
    const { userLogin } = UserManager();
    const navigate = useNavigate();
    const [ loader, setLoader ] = useState("LOGIN");
    const [ data, setData ] = useState({
        email: "",
        password: "",
    });

    function handleChange( event ) {
        setData({
            ...data,
            [ event.target.name ]: event.target.value
        });
    };

    async function handleLogin( event ) {
        event.preventDefault();
        setLoader("LOGGGING IN");
        const result = await userLogin( data.email, data.password );
        if (result.status === "success") {
            toast.success(result.message);
            navigate("/dashboard");
        } else if (result.status === "error") {
            toast.error(result.message);
        }
        setData({
            email: "",
            password: "",
        });
        setLoader("LOGIN");
    };

    return (
        <div className="login-page-container d-flex justify-content-center align-items-center">
            <Toaster />
            <div className="login-form-container d-flex justify-content-center">
                <form onSubmit={ handleLogin }>
                    <div className="login-input-fields d-flex justify-content-evenly align-items-center flex-column">
                        <p className="login-label fw-bold">LOGIN</p>
                        <input type="email" 
                               placeholder="Email" 
                               name="email"
                               value={ data.email }
                               onChange={ handleChange } 
                               required />
                        <div className="d-flex align-items-center position-relative">
                            <input type={ seePassword } 
                                   placeholder="Password" 
                                   name="password"
                                   value={ data.password } 
                                   onChange={ handleChange }
                                   autoComplete="off"
                                   required />
                            <button type="button" 
                                    className={`position-absolute ${ seePassword === "password" ? "see-password":"see-password-active" }`}
                                    onClick={() => {
                                        setSeePassword(seePassword === "password" ? "text":"password")
                                    }}>
                                <img src={ ShowPassword1 } width={ 20 }/>
                            </button>
                        </div>
                        <button type="submit" className="login-button fw-bold">{ loader }</button>
                        <p className="login-p">Click <a href="/register">Register</a> to create an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}