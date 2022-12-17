import Card from "../../component/card/Card"
import styles from "./auth.module.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { GrInsecure } from "react-icons/gr"

const AccessCode = function() {
    const { accessCode, setAccessCode } = useState("")
    const loginUser = function() {

    }

    return(
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className="--flex-center">
                        <GrInsecure size={35} color="#999"/>
                    </div>
                    <h2>Enter Access Code</h2>
                    <form onSubmit={loginUser}>
                        <input type="text"
                        placeholder="Access Code"
                        name="accesscode"
                        onChange={(e)=>{
                           setAccessCode(e.target.value)
                        }}
                        value={accessCode}
                        />
                        <button type="submit" className="--btn --btn-primary
                        --btn-block">
                            Proceed To Login
                        </button>
                        <span className="--flex-center">Check your email for logn access code</span>
                        <div className={styles.links}>
                        <p>
                        <Link to="/">- Home</Link>
                        </p>
                        <p className="v-link --color-primary">
                        <b>Resend Code</b> 
                        </p>
                    </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default AccessCode