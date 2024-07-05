import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Error404 from "../404";
import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import Carousel from "../../components/Carousel";
import Rating from "../../components/Rating";
import Collapse from "../../components/Collapse";
import Host from "../../components/Host";


function Overview() {
    const { idLocation } = useParams();

    const { isLoading, data, error } = useFetch("/logements.json");
    const [ isFound, setIsFound ] = useState(false);
    const [ locSelected, setLocSelected] = useState([]);

    useEffect(() => {
        !isLoading && setLocSelected(data.filter((element) => element.id === idLocation));
    },[isLoading, data, idLocation]);
    useEffect(() => {
        locSelected.length === 1 ? setIsFound(true) : setIsFound(false);
    },[locSelected]);

    return isLoading ? (
        <Loading />
    ) : error ? (
        <Error />
    ) : !isFound ? (
        <Error404 />
    ) : (
        <main className="overview">
            <Carousel picturesList={ locSelected[0].pictures } />
            <h2>{ locSelected[0].title }</h2>
            <h3>{ locSelected[0].location }</h3>
            <div className="overview__tags-wrapper">
            { locSelected[0].tags.map((tag,index) => (
                <Tag key={`tag-${index}`} name={ tag } />
            ))}
            </div>
            <Host name={locSelected[0].host.name} picture={locSelected[0].host.picture} />
            <Rating value={ locSelected[0].rating } />
            <div className="overview__collapses">
                <Collapse title="Description" content={ [locSelected[0].description] } />
                <Collapse title="Équipement" content={ locSelected[0].equipments } />
            </div>
        </main>
    )
}

export default Overview;