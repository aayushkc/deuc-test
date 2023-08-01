import {Link} from "react-router-dom"
import Logo from "../../assesets/NavLogo.png"
const Navbar = ()=>{
    return (
    <header className="header px-5">
    <nav class="navbar navbar-expand-lg navbar-light px--sm-3 py-3 ">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        <img src={Logo} alt="logo"/>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
       
        <div class="d-flex">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
      </div>
    </div>
  </nav>
  </header>
  );
}

export default Navbar;