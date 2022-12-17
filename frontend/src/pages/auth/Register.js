import Card from "../../component/card/Card"
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import styles from "./auth.module.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PasswordInput from "../../component/passwordInput/PasswordInput"
import { TiUserAddOutline } from "react-icons/ti";

const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

const Register = function() {
    const [formData, setFormData] = useState(initialState);
    const { name, email, password, password2 } = formData;

    //track Password input conditions
    const [ uCase, setUCase ] = useState(false)
    const [ num, setNum ] = useState(false)
    const [ sChar, setSChar ] = useState(false)
    const [ passLength, setPassLength ] = useState(false)

    const timesIcon = <FaTimes color="red" size={15}/>
    const checkIcon = <BsCheck2All color="green" size={15} />

    const switchIcon = function(condition) {
       if(condition){
        return checkIcon
       }
        return timesIcon
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    useEffect(() => {
        // Check Lower and Uppercase
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
          setUCase(true);
        } else {
          setUCase(false);
        }
        // Check for numbers
        if (password.match(/([0-9])/)) {
          setNum(true);
        } else {
          setNum(false);
        }
        // Check for special character
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
          setSChar(true);
        } else {
          setSChar(false);
        }
        // Check for PASSWORD LENGTH
        if (password.length > 5) {
          setPassLength(true);
        } else {
          setPassLength(false);
        }
      }, [password]);

    const registerUser = function() {

    }

    return(
        <div className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <div className="--flex-center">
                    <TiUserAddOutline size={35} color="#999" />
                    </div>
                    <h2>Register</h2>

                    <form onSubmit={registerUser}>
                    <input type="text"
                        placeholder="Name"
                        name="Nmae"
                        onChange={handleInputChange}
                        value={name}
                        />

                        <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={email}
                        />

                        <PasswordInput
                            placeholder="Password"
                            name="password"
                             onChange={handleInputChange}
                            value={password}
                        />

                        <PasswordInput
                            placeholder="Confirm Password"
                            name="password"
                             onChange={handleInputChange}
                            value={password2}
                        />

                        { /* password strength */ }
                             <Card className={styles.group} >
                                <ul className="form-list">
                                    <li>
                                        <span className={styles.indicator}>
                                            {switchIcon(uCase)}
                                            &nbsp; Lowercase & Uppercase
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.indicator}>
                                            {switchIcon(num)}
                                            &nbsp;Number (0-9)
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.indicator}>
                                            {switchIcon(sChar)}
                                            &nbsp;Special Character
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.indicator}>
                                            {switchIcon(passLength)}
                                            &nbsp;At least 6 Character
                                        </span>
                                    </li>
                                </ul>
                             </Card>

                        <button type="submit" className="--btn --btn-primary
                        --btn-block">
                            Register
                        </button>
                    </form>
        
                    <span className={styles.register}>
                        <Link to="/">Home</Link>
                        <p> &nbsp; Already have an account? &nbsp; </p>
                        <Link to="/login">Login</Link> 
                        
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default Register