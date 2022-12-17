import Card from "../../component/card/Card"
import styles from "./auth.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MdPassword } from "react-icons/md"
import PasswordInput from "../../component/passwordInput/PasswordInput"

const ResetPassword = function() {
    const { password, setPassword } = useState("")
    const { password2, setPassword2 } = useState("")

    const loginUser = function() {

    }

    return(
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className="--flex-center">
                        <MdPassword size={35} color="#999"/>
                    </div>
                    <h2>Reset Password</h2>
                    <form onSubmit={loginUser}>
                    <PasswordInput
                            placeholder="New Password"
                            name="password"
                             onChange={(e)=>{
                                setPassword(e.target.value)
                             }}
                            value={password}
                        />

                        <PasswordInput
                            placeholder="Confirm New Password"
                            name="password"
                            onChange={(e)=>{
                                setPassword2(e.target.value)
                             }}
                            value={password2}
                        />
                        <button type="submit" className="--btn --btn-primary
                        --btn-block">
                            Reset Password
                        </button>
                        <div className={styles.links}>
                        <p>
                        <Link to="/">- Home</Link>
                        </p>
                        <p>
                        <Link to="/login">- Login</Link> 
                        </p>
                    </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default ResetPassword