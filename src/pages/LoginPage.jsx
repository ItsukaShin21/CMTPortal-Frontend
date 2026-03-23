import "../css/LoginPage.css"

export default function LoginPage() {
    return (
        <div className="login-page-container d-flex justify-content-center align-items-center">
            <div className="login-form-container d-flex justify-content-center">
                <form>
                    <p className="login-label fw-bold">LOGIN</p>
                    <div className="login-input-fields d-flex justify-content-center align-items-center">
                        <input type="email" 
                               placeholder="Email" 
                               name="Email"/>
                        <input type="password" 
                               placeholder="Password" 
                               name="Password"/>
                    </div>
                </form>
            </div>
        </div>
    )
}