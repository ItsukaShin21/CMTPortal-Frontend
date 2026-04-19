import "../css/RegisterPage.css"
import ShowPassword1 from "../assets/images/ShowPassword1.png"
import UserManager from "../components/UserManager"
import RegisterBg from "../assets/images/RegisterBackground.png"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function RegisterPage() {
    const [seePassword, setSeePassword] = useState("password");
    const [seeConfirmPassword, setSeeConfirmPassword] = useState("password");
    const { userRegister } = UserManager();
    const [loader, setLoader] = useState("CREATE ACCOUNT");
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

    const handleRegister = async ( event ) => {
        event.preventDefault();
        setLoader("CREATING ACCOUNT");
        console.log(data);
        if (data.password != data.confirmPassword) {
            toast.error("Passwords do not match!");
            setData({
                password: "",
                confirmPassword: "",
            });
        }
        else if (data.role === "") {
            toast.error("Please choose your identity!");
        }
        else {
            toast.promise(
                await userRegister(data.name, data.email, data.role, data.password), {
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
        setLoader("CREATE ACCOUNT");
    }

    return (
        <div className="register-page-container d-flex align-items-center">
            <Toaster />
            <div className="page-description d-flex align-items-center">
                <div className="page-description-content ms-5">
                    <h2 className="text-white fw-bold">Join the</h2>
                    <h2 className="fw-bold">CMT Request Portal</h2>
                    <p className="text-white mt-4">
                       Access the next generation of technical diagnostics and maintenance management. 
                       Engineered for precision, built for reliability.
                    </p>
                </div>
            </div>

            <div className="register-form-container d-flex flex-column justify-content-center">
                <p className="text-white">CREATE AN ACCOUNT</p>
                <p className="text-white mb-5">Initialize your identity profile</p>

                <form onSubmit={ handleRegister }>
                    <div className="name-input-container d-flex flex-column mb-3">
                        <label>NAME</label>
                        <input type="text"
                               placeholder="John Doe"
                               name="name"
                               value={ data.name }
                               onChange={ handleChange }
                               required />
                    </div>

                    <div className="email-input-container d-flex flex-column mb-3">
                        <label>EMAIL</label>
                        <input type="email"
                               placeholder="Email"
                               name="email"
                               value={ data.email }
                               onChange={ handleChange }
                               required />
                    </div>

                    <div className="role-input-container mb-3">
                        <label>IDENTITY</label>
                        <div className="role-options d-flex flex-row justify-content-evenly">
                            <div className="d-flex align-items-center">
                                <input type="radio"
                                       name="role"
                                       className="me-1"
                                       value="Teacher"
                                       onClick={ handleChange } />
                                <label>TEACHER</label>
                            </div>

                            <div className="d-flex align-items-center">
                                <input type="radio"
                                       name="role"
                                       className="me-1"
                                       value="Student"
                                       onClick={ handleChange } />
                                <label>STUDENT</label>
                            </div>
                        </div>
                    </div>

                    <div className="password-input-container d-flex flex-column mb-3">
                        <label>PASSWORD</label>
                        <div className="password-input d-flex align-items-center">
                            <input type={ seePassword } 
                                   placeholder="********" 
                                   name="password"
                                   className={`${ seePassword === "password" ? "register-show-password": "register-hide-password"}`}
                                   value={ data.password }
                                   onChange={ handleChange }
                                   autoComplete="off"
                                   required />  
                            <img src={ ShowPassword1 } width={ 30 }
                                   onClick={() => setSeePassword(seePassword === "password" ? "text": "password")} />                     
                        </div>                    
                    </div>

                    <div className="confirm-pass-container d-flex flex-column">
                        <label>CONFIRM PASSWORD</label>
                        <div className="password-input d-flex align-items-center">
                            <input type={ seeConfirmPassword } 
                                   placeholder="********" 
                                   name="confirmPassword"
                                   value={ data.confirmPassword }
                                   onChange={ handleChange }
                                   autoComplete="off"
                                   required />
                            <img src={ ShowPassword1 } width={ 30 }
                                   onClick={() => setSeeConfirmPassword(seeConfirmPassword === "password" ? "text": "password")} />  
                        </div>
                    </div>

                    <button type="submit"
                            className="border-0 p-2 mt-5 register-button"
                            disabled={ loader === "CREATING ACCOUNT" }>{ loader }</button>
                    <div className="register-p mt-3 d-flex justify-content-center">
                        <p className="text-white">Click <a href="/">Login</a> if you have an account!</p>
                    </div>

                </form>
            </div>

        </div>
    )
}