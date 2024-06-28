import { useParams } from "react-router-dom";


function Overview() {
    const { idLocation } = useParams();
    return (
        <h2>Fiche location { idLocation }</h2>
    );
}

export default Overview;