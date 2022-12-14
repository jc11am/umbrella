import "./Header.scss"
import { BiLogIn } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { NavLink, Link, Navigate } from "react-router-dom"

const activeLink = ({isActive}) => (
    isActive ? "active" : ""
)

const Header = function() {

    const goHome = function() {
        <Navigate to="/" />
    }
    return(
        <header className="header">
            <nav>
                <div className="logo" onClick={goHome}>
                    <BiLogIn size={35}/>
                    <samp>UMBRELLA</samp>
                </div>

                <ul className="home-links">
                   <li className="--flex-center">
                        <FaUserCircle size={20}/>
                        <p className="--color-white">Hi, Joe</p>
                    </li> 

                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/login">Login</Link>
                        </button>
                    </li>

                    
                    <li>
                            <NavLink to="/profile" className={activeLink}>Profile</NavLink>
                    </li>

                    
                    <li>
                        <button className="--btn --btn-secondary">
                            Logout
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header