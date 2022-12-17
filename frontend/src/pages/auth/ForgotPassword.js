import Card from "../../component/card/Card"
import styles from "./auth.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineMail } from "react-icons/ai"

const ForgotPassword = function() {
    const { email, setEmail } = useState("")

    const loginUser = function() {

    }

    return(
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className="--flex-center">
                        <AiOutlineMail size={35} color="#999"/>
                    </div>
                    <h2>Forgot Password</h2>
                    <form onSubmit={loginUser}>
                        <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e)=>{
                           setEmail(e.target.value)
                        }}
                        value={email}
                        />
                        <button type="submit" className="--btn --btn-primary
                        --btn-block">
                            Get Rest Email
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

export default ForgotPassword