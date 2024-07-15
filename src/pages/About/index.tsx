// Import react components
import React from "react";

// Import Projet components
import Banner from "../../components/Banner/index.tsx";
import Collapse from "../../components/Collapse/index.tsx";
import landscapeImg from "../../assets/images/about-landscape.jpg";

// Import style
import "../../assets/style/about.scss";

// Page "about"
function About() {
    return (
        <main className="about">
            <Banner title={[""]} titleOpacity="0.3" img={ landscapeImg } alt="Vallée boisée et sommets enneigés" />
            <Collapse title="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
            <Collapse title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entrainera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Service">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entrainera une exclusion de notre plateforme.</p>
            </Collapse>
            <Collapse title="Sécurité">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
        </main>
    );
}

export default About;
