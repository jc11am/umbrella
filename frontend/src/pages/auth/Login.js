import { BiLogIn } from "react-icons/bi"
import Card from "../../component/card/Card"
import styles from "./auth.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import PasswordInput from "../../component/passwordInput/PasswordInput"

const Login = function() {
    const { email, setEmail } = useState("")
    const { password, setPassword } = useState("")

    const loginUser = function() {

    }

    return(
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className="--flex-center">
                        <BiLogIn size={35} color="#999"/>
                    </div>
                    <h2>Login</h2>
                    <div className="--flex-center">
                        <button className="--btn --btn-google">
                            Login With Google
                        </button>
                    </div>
                    <br />
                    <p className="--text-center --fw-bold">or</p>

                    <form onSubmit={loginUser}>
                        <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e)=>{
                           setEmail(e.target.value)
                        }}
                        value={email}
                        />

                        <PasswordInput
                            placeholder="Password"
                            name="password"
                             onChange={(e)=>{
                            setPassword(e.target.value)
                             }}
                            value={password}
                        />
                        <button type="submit" className="--btn --btn-primary
                        --btn-block">
                            Login
                        </button>
                    </form>
                    <Link to="/forgot">Forgot Password</Link>
                    <span className={styles.register}>
                        <Link to="/">Home</Link>
                        <p> &nbsp; Don't have an account? &nbsp; </p>
                        <Link to="/register">Register</Link> 
                        
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Login