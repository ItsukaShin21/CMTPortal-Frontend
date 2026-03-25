import "../css/LoginPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import ShowPassword2 from "../assets/images/ShowPassword2.png"
import { useState } from "react"

export default function LoginPage() {
    const [seePassword, setSeePassword] = useState("password");

    return (
        <div className="login-page-container d-flex justify-content-center align-items-center">
            <div className="login-form-container d-flex justify-content-center">
                <form>
                    <div className="login-input-fields d-flex justify-content-evenly align-items-center flex-column">
                        <p className="login-label fw-bold">LOGIN</p>
                        <input type="email" 
                               placeholder="Email" 
                               name="Email" />
                        <div className="d-flex align-items-center position-relative">
                            <input type={ seePassword } 
                                   placeholder="Password" 
                                   name="Password" />
                            <button type="button" 
                                    className={`position-absolute ${ seePassword === "password" ? "see-password":"see-password-active" }`}
                                    onClick={() => {
                                        setSeePassword(seePassword === "password" ? "text":"password")
                                    }}>
                                <img src={ ShowPassword1 } width={ 30 }/>
                            </button>
                        </div>
                        <button type="submit" className="login-button fw-bold">LOGIN</button>
                        <p className="login-p">Click <a href="/home">Register</a> to create an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}