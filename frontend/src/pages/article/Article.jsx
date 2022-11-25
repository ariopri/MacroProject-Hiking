import React from "react";
import Gambar5 from "../../assets/gambar5.png";
import Gambar6 from "../../assets/gambar6.png";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import Footer from "../../components//footer/Footer"
import '../../styles/pages/article.scss'

const Article = () => {
    return (
        <>
            <NavigationBar />
            <section className="container-article">
                <h1>Hiking Layers: Everything You Need To Know</h1>

                <p>
                    Packing for an outdoor adventure can be challenging because so many factors go into what clothing to bring.
                    After all, being too cold or too hot can mean the difference between having a great experience and risking discomfort.
                    Because outdoor temperatures are always unpredictable, it’s important to use the layering system to help you manage your body temperature.
                    Using this system ultimately means you’ll be more comfortable and have more fun on your next outdoor adventure.
                </p>

                <img src={Gambar5} alt="Gambar" />

                <div>
                    <h4>1. UNDERSTANDING WHY THE LAYERING SYSTEM IS IMPORTANT</h4>

                    <div>
                        <p className="sub-points">The Layering System Defined</p>
                        <p>
                            A good layering system includes a versatile assortment of garments that have breathable wicking, insulation and waterproof properties that help you manage your body temperature.
                            The better your layering system does that, the more comfortable you will be on your next outdoor pursuit!
                        </p>

                        <p className="sub-points">Why Do People Use the Layering System?</p>
                        <p>
                            One word: versatility. Think of each layer as a barrier between you and the elements. Each layer of clothing represents another layer of versatility.
                            When it gets hot, you can take layers off to maintain a comfortable body temperature; when it gets cold, you can add layers to do the same.
                            All these layers work together to give you a wider range of comfort when you’re in the outdoors.
                            Since you can always expect the temperature to change outside, versatility is essential.
                        </p>
                    </div>
                </div>

                <div>
                    <h4>2. UNDERSTANDING HOW THE LAYERING SYSTEM WORKS</h4>

                    <div>
                        <p className="sub-points">Layer 1: The Next-to-Skin (or Base) Layer</p>
                        <p>
                            This is whatever layer is sitting on your skin. It’s typically the hiking layer with the least amount of insulating properties,
                            but it’s the workhorse when it comes to pulling moisture off your skin. In winter, these layers might turn into thicker layers,
                            but your base layer is still whatever is right on your skin.
                        </p>

                        <p className="sub-points">Layer 2: The Midweight or Light Breathable Layer</p>
                        <p>
                            You wear this layer on top of your base layer, and it usually has some insulating and moisture wicking properties.
                            You can typically wear this as a standalone or as part of your overall system when it’s cold.
                            This will pull moisture from your base layer and spread it out even more to promote evaporation and dryness.
                        </p>

                        <p className="sub-points">Layer 3: The Insulating Layer</p>
                        <p>
                            This layer is the primary layer to keep you warm. In summer, this layer might be a fleece, but if you’re winter camping,
                            it might be an 800-fill down jacket that makes you look like the Michelin Man. Regardless of season,
                            this insulating layer should work well with your activity and the rest of your layers.
                        </p>

                        <p className="sub-points">Layer 4: The Outermost Layer or Rain/Snow Shell</p>
                        <p>
                            A good shell jacket serves as your first line of defense from the elements, so it’s essential for it to be waterproof, windproof and breathable.
                            These properties keep moisture from building too much on your body. This layer rarely has insulating properties and is usually more versatile for it.
                            A high-quality, durable hardshell jacket can be multifunctional; it can be equally at home sloshing in a summer rainstorm and showshoeing in Yellowstone.
                        </p>
                    </div>
                </div>

                <img src={Gambar6} alt="Gambar" />

                <div>
                    <h4>3. DECIDING WHAT TO BUY AND WHAT TO BRING</h4>

                    <div>
                        <p className="sub-points">How Many Layers Do I Need?</p>
                        <p>
                            The best answer is that it depends. Generally speaking, you want a base layer, insulating layers and an outer shell layer.
                            Depending on temperature, you might have several insulating layers of various thicknesses. The concept, however, stays the same:
                            more hiking layers means more versatility, and when you combine them all, they equal the total amount of insulating potential of your system.
                            Backroads leaders, for example, use the layering system in any season, with layers specially selected for the particular climate.
                        </p>
                        <p>
                            When choosing what to bring, think about three things: the weather and any potential temperature changes,
                            the terrain and the strenuousness of the activities (being sweaty in the cold can be quite uncomfortable),
                            and the geography you’ll be hiking in. When you ascend mountains, the temperature typically drops,
                            whereas when you descend (particularly into canyons), the temperature typically rises. No matter where you find your next adventure,
                            packing and wearing the proper hiking layers could mean the difference between having a great outdoor experience and heading back to the trailhead early.
                            There is no better way to ensure that positive experience than to use the layering system on your next adventure.
                        </p>

                        <p className="sub-points">What Types of Clothing Features Should I Look for When I Buy?</p>
                        <p>
                            Natural fibers, such as merino wool, or synthetic fibers, such as nylons and spandex are proven materials for outdoor recreation.
                            Look for these four traits in your hiking layers:
                        </p>

                        <div>
                            <p className="sub-points">1.Breathability</p>
                            <p>
                                A breathable fabric is important because it allows heat to pass from layer to layer and ultimately leave your system.
                            </p>

                            <p className="sub-points">2.Wicking</p>
                            <p>
                                Fabrics with wicking properties absorb and spread moisture efficiently and promote evaporation, aiding you in cooling down.
                                This movement of moisture from inner layer to outer layer keeps your body dry and comfortable when it’s cold, wet or windy.
                            </p>
                            <p>
                                If your shirt is wet and you have a good layering system, the moisture should be able to escape, and you will soon be dry.
                                This is particularly important when you’re sweating in cold environments and can’t afford to be wet.
                                Hiking layers that don’t breathe (like cheap rain jackets) prevent moisture from escaping, and they leave you cold and uncomfortable.
                            </p>

                            <p className="sub-points">3.Insulation</p>
                            <p>
                                Insulating layers, such as fleece, down or synthetic filaments, typically have different benefits and drawbacks, but they do a great job at retaining valuable heat in cold climates.
                                Some have higher insulating properties than others, but it’s important to find one that fits the type of climate you encounter the most. For example, when you’re skiing,
                                down jackets (typically filled with goose feathers) can be very warm, but they do very poorly when wet. In this case, a synthetic jacket—despite down being warmer—is probably a better choice.
                            </p>

                            <p className="sub-points">4.Waterproofness</p>
                            <p>
                                The outermost layer of the system is often called a “shell jacket.” This hiking layer protects you from the elements, such as rain, snow and wind.
                                This layer is worth spending time purchasing because it can be very versatile, and if you get one that suits your needs, it could last a long time.
                                Generally speaking, you want something waterproof and breathable. Opt for fabrics like Gore-Tex, eVent or OutDry.
                            </p>
                            <p>
                                1.Look for a layering system that includes breathing, wicking, insulating and waterproof properties.
                                Your shell should be the only fully waterproof layer, and you should never leave home without it—even on bluebird days.
                            </p>
                            <p>
                                2.Remember, your layering system should changes depending on your expedition. Sometimes your kit will include a base layer, an insulation layer and a rain jacket.
                                On other occasions, when temperatures are more variable, you could have additional middle layers or heavier base layers.
                            </p>
                            <p>
                                3.Invest in a layering system that will work well for the things you do most. Take your time finding what works.
                                When it comes to being comfortable in the outdoors, forget the single fashionable layer. Cotton is out, and wool, down and high-tech synthetic fabrics are in.
                                The layering system provides versatility to your attire and is key to having great experiences outside—no matter what Mother Nature throws at you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Article;