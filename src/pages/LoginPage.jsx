import "../css/LoginPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import UserManager from "../components/UserManager"
import { useState } from "react"

export default function LoginPage() {
    const [seePassword, setSeePassword] = useState("password");
    const { userLogin } = UserManager();
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

    function handleLogin( event ) {
        event.preventDefault();
        setLoader("LOGGGING IN");
        userLogin( data.email, data.password );
        setLoader("LOGIN");
    };

    return (
        <div className="login-page-container d-flex justify-content-center align-items-center">
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
                        <p className="login-p">Click <a href="/home">Register</a> to create an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}