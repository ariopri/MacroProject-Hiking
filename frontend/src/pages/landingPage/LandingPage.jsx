import Sigambar1 from "../../assets/gambar1.png";
import Sigambar2 from "../../assets/gambar2.png";
import Sigambar3 from "../../assets/gambar3.svg";
import Sigambar4 from "../../assets/gambar4.svg";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import '../../styles/pages/landingPage.scss'

const LandingPage = () => {
    return (
        <>
            <NavigationBar />
            <Hero />
            <section className="fitur">
                <div className="container gambarganjil">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h2>Good Places to Explore!!</h2>
                            <p>
                                Some places maybe undiscovered, so it’s the time! Let’s check this out!!
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src={Sigambar1}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="container gambargenap">
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <img
                                src={Sigambar2}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                        </div>
                        <div className="col-md-4">
                            <h2>Need Some Beginner Tips?</h2>
                            <p>
                                Solving problem as beginner is usually confusing, because you have no one to ask.
                                So here we are to help you uncovered the things by giving some tips
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container gambarganjil">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <h2>What we needed before do hiking?</h2>
                            <p>
                                Maybe you need some detail for your hiking preparation,
                                like additional things for make sure you’re safe.
                                Good things! This article could help you
                            </p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src={Sigambar3}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                        </div>
                    </div>
                </div>

                <div className="container gambargenap">
                    <div className="row justify-content-center">
                        <div className="col-md-4 text-center">
                            <img
                                src={Sigambar4}
                                alt="Gambar"
                                className="pictures img-fluid"
                            />
                        </div>
                        <div className="col-md-4">
                            <h2>Tips to build a camp by yourself!</h2>
                            <p>
                                You should camp by yourself, but you have no one to ask for help.
                                Here some tips for you, here we go!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="center">
                    <h2>We always have some tips for you!</h2>
                    <a href="/tips">See More Tips Here!</a>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LandingPage;