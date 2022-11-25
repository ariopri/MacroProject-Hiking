import React from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navigationBar/NavigationBar";

import "../../styles/pages/community.scss";

const Community = () => {
    return (
        <>
            <NavigationBar />
            <div className="community">
                <h2>Join With Community</h2>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                    alt="logo"
                />
            </div>
            <Footer />
        </>
    );
};

export default Community;