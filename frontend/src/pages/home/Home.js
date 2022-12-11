import Footer from "../../componet/footer/Footer"
import Header from "../../componet/header/Header"
import "./Home.scss"
import loginImg from "../../assets/login.svg"


const Home = function() {
    return(
        <div>
            <Header/>
            <section className="container hero">
                <div className="hero-text">
                    <h2>MERN Stack Authentication</h2>
                    <p>Our Customers Security is our Primary
                        Purpose
                    </p>
                    <p>
                        Secure your Life with the Umbrella Cooperation,
                        and never regret it.

                    </p>
                    <div className="hero-buttons --flex-start">
                        <button className="--btn --btn-danger">
                            Register
                        </button>
                        <button className="--btn --btn-primary">
                            Login
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={loginImg} alt="Auth" />
                </div>

            </section>
            <Footer/>
        </div>
    )
}

export default Home