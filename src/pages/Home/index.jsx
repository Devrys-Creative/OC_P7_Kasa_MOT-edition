// Import React components
import React from "react";

// Import Style
import "../../assets/style/home.scss";
import homeLandscape from "../../assets/images/home-landscape.jpg";

// Import project components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

// Import projet custom hook
import { useFetch } from "../../hooks/useFetch";

// Home page
function Home() {

    // API : load rents (currently from json)
    const { isLoading, data, error } = useFetch("/logements.json");

    return(
        <main className="home">
            <Banner key="bannerHome" titleOpacity="0.6" title={["Chez vous,","partout et ailleurs"]} img={ homeLandscape } alt="paysage de falaise de bord de mer" />
            <div className="home__card-wrapper">
            { isLoading ? (<Loading />) : ( error ? (<Error />) : (
                <React.Fragment>
                    { data.map((element) => (
                        <Card key={`card${element.id}`} id={element.id} title={element.title} imgPath={ element.cover } />
                    ))}
                </React.Fragment>
            ))}
            </div>
        </main>
    );
}

export default Home;