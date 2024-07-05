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

import "../../assets/style/Overview.scss";


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
            <Carousel className="overview__carousel" picturesList={ locSelected[0].pictures } />
            <h2 className="overview__title">{ locSelected[0].title }</h2>
            <h3 className="overview__location">{ locSelected[0].location }</h3>
            <div className="overview__tags-wrapper">
            { locSelected[0].tags.map((tag,index) => (
                <Tag className="overview__tags-wrapper__tag" key={`tag-${index}`} name={ tag } />
            ))}
            </div>
            <Host className="overview__host" name={locSelected[0].host.name} picture={locSelected[0].host.picture} />
            <Rating className="overview__rating" value={ locSelected[0].rating } />
            <div className="overview__collapses">
                <Collapse title="Description" content={ [locSelected[0].description] } smallTitle={true} />
                <Collapse title="Équipement" content={ locSelected[0].equipments } smallTitle={true} />
            </div>
        </main>
    )
}


export default Overview;