import React from "react";
import Logo from "../../assets/logo.svg/";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import '../../styles/pages/about.scss'

const AboutUs = () => {
    return (
        <>
            <NavigationBar />
            <div className="container about">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2>Hiking</h2>
                        <p>
                            is a cross-device and multi-platform web application that is useful
                            for climbers in choosing the desired mountain by displaying
                            conditions about the mountain, equipment to bring, and so on. Let's
                            use to get information about mountain in Indonesia. Join us now!
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={Logo} alt="logo" className="pictures img-fluid" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;