import React from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navigationBar/NavigationBar";

const Tips = () => {
    return (
        <>
            <NavigationBar />
            <div className="tips">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h2>Are you Beginner?</h2>
                            <p>
                                Need preparation tips?
                                Looking for easy path?
                                How to find a guide?

                                maybe these articles will suit you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tips;