// Import React components
import React from "react";

// Import Style
import "../../assets/style/home.scss";
import homeLandscape from "../../assets/images/home-landscape.jpg";

// Import project components
import Banner from "../../components/Banner/index.tsx";
import Card from "../../components/Card/index.tsx";
import Error from "../../components/Error/index.tsx";
import Loading from "../../components/Loading/index.tsx";

// Import projet custom hook
import { useFetch } from "../../hooks/useFetch.tsx";


// Home page
const Home: React.FC = () => {

    // API : load rents (currently from json)
    const { isLoading, data, error } = useFetch<Rent[]>("/logements.json");

    return(
        <main className="home">
            <Banner key="bannerHome" titleOpacity="0.6" title={["Chez vous,","partout et ailleurs"]} img={ homeLandscape } alt="paysage de falaise de bord de mer" />
            <div className="home__card-wrapper">
            { isLoading ? (<Loading />)
                : error ? (<Error />)
                : data !== null && (
                <React.Fragment>
                    { data.map((element) => (
                        <Card key={`card${element.id}`} id={element.id} title={element.title} imgPath={ element.cover } />
                    ))}
                </React.Fragment>
            )}
            </div>
        </main>
    );
}

export default Home;