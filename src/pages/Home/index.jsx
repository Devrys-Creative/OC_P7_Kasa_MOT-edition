import { Link } from "react-router-dom";


function Home() {
    return(
        <>
        <h2>Accueil</h2>
        <Link to="/location">Location</Link>
        <br />
        <Link to="/location/3">Location 3</Link>
        </>
    );
}

export default Home;