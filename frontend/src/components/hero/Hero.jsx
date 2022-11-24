import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../../assets/bgLandingPage.svg"
import '../../styles/components/hero.scss'


const Hero = () => {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h2>Down to Earth, Socially</h2>
                <p>We were founded on the idea that nature should connect people no matter where you are</p>
                <Link to={"/login"}>JOIN US!</Link>
            </div>
            <img src={Banner} alt="Gambar" className="img-banner" />
        </div>
    )
}

export default Hero