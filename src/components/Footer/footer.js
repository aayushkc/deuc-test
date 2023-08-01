import { Link } from "react-router-dom";
import FootLogo from "../../assesets/footerLogo.png"

const Footer = () => {
    return <>
        <footer className="footer">
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={FootLogo} alt="logo" />
                    </div>

                    <div className="col-lg-3">
                        <ul className="flex-column">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="about-us" >About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="project" >Project</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="project" >Team</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="contact" >Contact</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active" to="project" >Donate</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                            <h3>Find Us</h3>
                            <div className="d-flex flex-column mt-4">
                                <p>Kalaiya Sub-Metropolitan City-6, Madarsha Tole, Bara</p>
                                <p>+977-53-551909</p>
                                <p>deuc.bara806@gmail.com</p>
                            </div>
                    </div>

                    <div className="col-lg-3">
                        <h3>Help and Support</h3>
                        <button className="btn btn-lg d-grid col-7 mt-5 ms-3 justify-content-center align-items-center">Donate</button>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;