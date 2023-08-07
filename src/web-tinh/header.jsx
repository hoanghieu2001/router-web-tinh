
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

// import { NavLink } from 'react-bootstrap';
export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center position-fixed w-100">
            <div className="container-fluid align-items-center">
                <a href="/home" style={{ color: "black" }} className="navbar-brand ">SNAKE-STORE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto me-auto ps-5 my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/home" className="nav-link px-2 link-primery ">HOME</a></li>
                            <li><a href="/blog" className="nav-link px-2 link-primery">BLOG</a></li>

                            <li><a href="#" className="nav-link px-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">HOTLINE</a></li>
                            <li><a href="/showrooms" className="nav-link px-2">SHOWROOMS</a></li>
                            <li><a href="/products" className="nav-link px-2">PRODUCTS</a></li>
                        </ul>
                    </ul>
                    <form className="d-flex me-2 search" role="search">
                        <input className="form-control" style={{ border: "1px solid #474242" }} type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className="form">
                        <a href="">
                            <button style={{ border: "solid 1px #474242", borderRadius: "13px" }} className="btn btn-light" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </button>
                        </a>
                        <a href="">
                            <button style={{ border: "solid 1px #474242", borderRadius: "13px" }} className="ms-2 btn btn-light" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav >



    )
}