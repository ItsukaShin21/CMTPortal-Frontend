import "../css/LoginPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import Logo from "../assets/images/CmtLogo.png"
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
        <div className="login-page-container d-flex flex-column justify-content-center align-items-center">
            <Toaster />

            <div className="login-logo d-flex flex-column justify-content-center align-items-center">
                <img src={ Logo } height={ 150 } />
                <h2 className="login-h2 text-white fw-bold">CMT PORTAL</h2>
            </div>

            <div className="login-form-container d-flex justify-content-center">
                <form onSubmit={ handleLogin }>
                    <div className="login-input-fields d-flex justify-content-evenly align-items-center flex-column">
                        <div className="login-email-field d-flex row align-items-center">
                            <label className="p-0">EMAIL</label>
                            <input type="email" 
                                   placeholder="example@gmail.com" 
                                   name="email"
                                   value={ data.email }
                                   onChange={ handleChange } 
                                   required />
                        </div>

                        <div className="login-password-field">
                            <label>PASSWORD</label>
                            <div className="d-flex align-items-center position-relative">
                                <input type={ seePassword } 
                                       placeholder="********" 
                                       name="password"
                                       value={ data.password } 
                                       onChange={ handleChange }
                                       autoComplete="off"
                                       required />
                                <button type="button" 
                                        className={`position-absolute 
                                                    ${ seePassword === "password" ? "login-see-password":"login-see-password-active" }`}
                                        onClick={() => {
                                            setSeePassword(seePassword === "password" ? "text":"password")
                                        }}>
                                    <img src={ ShowPassword1 } width={ 20 }/>
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="login-button mt-3 fw-bold text-white">{ loader }</button>
                        <p className="login-p">Click <a href="/register" className="fw-bold">Register</a> to create an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}