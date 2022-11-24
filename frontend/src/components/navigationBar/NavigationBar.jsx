import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.svg"
import "../../styles/components/navigationBar.scss"
const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id='custom-nav'>
      <div className="container">
        <Link to={"/"} className="navbar-brand" >
          <img src={Logo} alt="Logo" width={"40px"} height={"40px"} />
          <span
            style={{
              textTransform: "uppercase",
              color: "black",
              fontWeight: "700",
              fontSize: "1.4rem",
              marginLeft: "0.5em",
              fontSize: "x-large",
            }}
          >Hiking</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/tips"}>Tips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/community"}>community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>about us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar