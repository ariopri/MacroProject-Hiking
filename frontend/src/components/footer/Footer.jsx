import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <div className="footer">
            <div
                className="pt-5 pb-5 footer text-light"
                style={{
                    backgroundColor: "#022449",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <center>
                                <h4 className="mt-lg-0 mt-sm-3">Hiking</h4>
                                <p className="col-lg-11 text-dark-50">
                                    is a cross-device and multi-platform web application that is useful for climbers in choosing the desired mountain by displaying conditions about the mountain, equipment to bring, and so on.
                                    {" "}
                                </p>
                            </center>
                        </div>
                        <div className="col-lg-2 col-xs-12 ">
                            <h4 className="mt-lg-0 mt-sm-3">Home</h4>
                            <p className="pr-5 text-dark-50">Tips</p>
                            <p className="pr-5 text-dark-50">Article</p>
                            <p className="pr-5 text-dark-50">Community</p>
                            <p className="pr-5 text-dark-50">About Us</p>
                        </div>
                        <div className="col-lg-2 col-xs-12 ">
                            <h4 className="mt-lg-0 mt-sm-4">Contact</h4>
                            <p className="pr-5 text-dark-50">
                                < WhatsAppIcon />
                                +61 234557689{" "}
                            </p>
                        </div>
                        <div className="col-lg-2 col-xs-12 ">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <p className="pr-5 text-dark-50"> South Jakarta, Indonesia</p>
                            <p className="pr-5 text-dark-50">Grand Slipi Tower Lt. 42 Jl. S. Parman Kav 22-24</p>
                            <p className="pr-5 text-dark-50"> 8 A.M - 5 P.M</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className="text-center">
                                <small className="text-dark-50">© 2022 Perkedel All Rights Reserved.</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;