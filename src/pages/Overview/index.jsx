// Import React components
import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";

// Import project components
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Tag from "../../components/Tag";
import Slideshow from "../../components/Slideshow";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";

// Import Style
import "../../assets/style/overview.scss";

// Overview page : view details about a rent
function Overview() {

    // idLocation is visible in the url
    const { idLocation } = useParams();

    // Load data from API (currently json)
    const { isLoading, data, error } = useFetch("/logements.json");

    // State to store selected rent
    const [ locSelected, setLocSelected] = useState();

    // Change status of isLoading => store selected rent in State
    useEffect(() => {
        !isLoading && setLocSelected(data.filter((element) => element.id === idLocation));
    },[isLoading, data, idLocation]);

    // useEffect is async so isLoading can be false and locSelected not defined yet
    // => check locSelected status first (not defined = error or loading ; defined = display or 404)
    return !locSelected ? (
                isLoading ? (
                    <Loading />
                ) : error && (
                    <Error />
                )
            ) : (
                locSelected.length !== 1 ? (
                    <Navigate to="/404" />
                ) : (
                    <main className="overview">
                        <Slideshow className="overview__carousel" picturesList={ locSelected[0].pictures } />
                        <h2 className="overview__title">{ locSelected[0].title }</h2>
                        <h3 className="overview__location">{ locSelected[0].location }</h3>
                        <div className="overview__tags-wrapper">
                        { locSelected[0].tags.map((tag,index) => (
                            <Tag className="overview__tags-wrapper__tag" key={`tag-${index}`} name={ tag } />
                        ))}
                        </div>
                        <Host className="overview__host" name={locSelected[0].host.name} picture={locSelected[0].host.picture} />
                        <Rating className="overview__rating" value={ Number(locSelected[0].rating) } />
                        <div className="overview__collapses">
                            <Collapse title="Description" content={ [locSelected[0].description] } smallTitle={true} />
                            <Collapse title="Équipement" content={ locSelected[0].equipments } smallTitle={true} />
                        </div>
                    </main>
                )
            )
}


export default Overview;