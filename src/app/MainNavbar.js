import Link from 'next/link'
import React from 'react'

function MainNavbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top navbar-custom sticky sticky-light"
                id="navbar">
                <div className="container">
                    <a className="navbar-brand logo" href="#!">
                        <img src="./static/images/logo-dark.png" alt="" height="22" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#departments">Departments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#reviews">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faqs">FaQ's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="nav-btn">
                            <Link href={`/login`} className="btn btn-primary">
                                <i
                                    className="mdi mdi-login me-2"></i>Log in</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainNavbar