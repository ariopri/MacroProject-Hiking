import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import "../../styles/components/navigationBar.scss"
const NavigationBar = () => {
  return (
    <div className="container" style={{ backgroundColor: "#FEF9E2" }}>
      <nav className="navbar navbar-expand-lg bg-light custom-nav bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/dashboard"}>
            <img src={Logo} alt="hiking.com" />
            <span>Hiking</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/tips"}>
                  Tips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/community"}>
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/article"}>
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar