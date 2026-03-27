import "../css/RegisterPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import UserManager from "../components/UserManager";
import { useState } from "react"

export default function RegisterPage() {
    const [seePassword, setSeePassword] = useState("password");
    const [seeConfirmPassword, setSeeConfirmPassword] = useState("password");
    const { userRegister } = UserManager();
    const [loader, setLoader] = useState("REGISTER");
    const [data, setData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        currentPassword: "",
    });

    const handleChange = ( event ) => {
        setData(
            [ event.target.name ] = event.target.value
        );
    }

    const handleRegister = ( event ) => {
        event.preventDefault();
        setLoader("CREATING ACCOUNT...");
        userRegister(data.name, data.email, data.role, data.password);
        setLoader("REGISTER");
    }

    return (
        <div className="register-page-container d-flex justify-content-center align-items-center">
            <div className="register-form-container d-flex justify-content-center">
                <form onSubmit={ handleRegister }>
                    <div className="register-input-fields d-flex justify-content-evenly align-items-center flex-column">
                        <p className="register-label fw-bold">REGISTER</p>
                        <input type="text"
                               placeholder="Name"
                               name="name"
                               required />
                        <input type="email"
                               placeholder="Email"
                               name="email"
                               required />
                        <select name="role">
                            <option value="" defaultValue>Select identity</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Student">Student</option>
                        </select>
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
                        <div className="d-flex align-items-center position-relative">
                            <input type={ seeConfirmPassword } 
                                   placeholder="Password" 
                                   name="password"
                                   value={ data.currentPassword }
                                   onChange={ handleChange }
                                   autoComplete="off"
                                   required />
                            <button type="button" 
                                    className={`position-absolute ${ seeConfirmPassword === "password" ? "see-password":"see-password-active" }`}
                                    onClick={() => {
                                        setSeeConfirmPassword(seeConfirmPassword === "password" ? "text":"password")
                                    }}>
                                <img src={ ShowPassword1 } width={ 20 }/>
                            </button>
                        </div>
                        <button type="submit" className="login-button fw-bold">{ loader }</button>
                        <p className="login-p">Click <a href="/">Login</a> if you have an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}