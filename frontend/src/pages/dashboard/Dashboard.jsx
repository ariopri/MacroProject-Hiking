import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        axios(
            "https://6382a6221ada9475c8f10b2d.mockapi.io/:images"
        ).then((res) => {
            setDigimons(res.data);

        });
    }, []);


    return (
        <>
            <h1>
                {digimons.map((digimon) => (
                    <div key={digimon.name}>
                        <h1>{digimon.name}</h1>
                        <img
                            className="mt-4 rounded-circle img-fluid shadow-1-strong"
                            width="100"
                            height="100"
                            src={digimon.images} alt={digimon.name} />

                    </div>
                ))}
            </h1>
            {digimons.map((item, index) => {
                <div key={index}>
                    <img src={item.img} alt={item.name} width={200} />
                    <h2>{item.name}</h2>
                </div>;
            })}
        </>
    );
};

export default Dashboard;