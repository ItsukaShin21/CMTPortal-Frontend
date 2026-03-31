import "../css/RegisterPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import UserManager from "../components/UserManager"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function RegisterPage() {
    const [seePassword, setSeePassword] = useState("password");
    const [seeConfirmPassword, setSeeConfirmPassword] = useState("password");
    const { userRegister } = UserManager();
    const [loader, setLoader] = useState("done");
    const [data, setData] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = ( event ) => {
        setData({
            ...data,
            [ event.target.name ]: event.target.value
        });
    }

    const handleRegister = ( event ) => {
        event.preventDefault();
        setLoader("waiting");
        console.log(data);
        if (data.password != data.confirmPassword) {
            toast.error("Passwords do not match!");
            setData({
                password: "",
                confirmPassword: "",
            });
        } else {
            toast.promise(
                userRegister(data.name, data.email, data.role, data.password), {
                    loading: "Creating account.. Please wait!",
                });
            setData({
                name: "",
                email: "",
                role: "",
                password: "",
                confirmPassword: "",
            });
        }
        setLoader("done");
    }

    return (
        <div className="register-page-container d-flex justify-content-center align-items-center">
            <Toaster />
            <div className="register-form-container d-flex justify-content-center">
                <form onSubmit={ handleRegister }>
                    <div className="register-input-fields d-flex justify-content-evenly align-items-center flex-column">
                        <p className="register-label fw-bold">REGISTER</p>
                        <input type="text"
                               placeholder="Name"
                               name="name"
                               value={ data.name }
                               onChange={ handleChange }
                               required />
                        <input type="email"
                               placeholder="Email"
                               name="email"
                               value={ data.email }
                               onChange={ handleChange }
                               required />
                        <select name="role" 
                                onChange={ handleChange } 
                                value={ data.role }>
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
                                    className={`position-absolute 
                                                ${ seePassword === "password" ? "register-see-password":"register-see-password-active" }`}
                                    onClick={() => {
                                        setSeePassword(seePassword === "password" ? "text":"password")
                                    }}>
                                <img src={ ShowPassword1 } width={ 20 }/>
                            </button>
                        </div>
                        <div className="d-flex align-items-center position-relative">
                            <input type={ seeConfirmPassword } 
                                   placeholder="Confirm Password" 
                                   name="confirmPassword"
                                   value={ data.confirmPassword }
                                   onChange={ handleChange }
                                   autoComplete="off"
                                   required />
                            <button type="button" 
                                    className={`position-absolute 
                                                ${ seeConfirmPassword === "password" ? "register-see-password":"register-see-password-active" }`}
                                    onClick={() => {
                                        setSeeConfirmPassword(seeConfirmPassword === "password" ? "text":"password")
                                    }}>
                                <img src={ ShowPassword1 } width={ 20 }/>
                            </button>
                        </div>
                        <button type="submit" className="register-button fw-bold" disabled={ loader === "waiting" }>
                            REGISTER
                        </button>
                        <p className="register-p">Click <a href="/" className="fw-bold">Login</a> if you have an account!</p>
                    </div>
                </form>
            </div>
        </div>
    )
}