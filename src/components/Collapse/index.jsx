import "../../assets/style/Collapse.scss";
import arrowTop from "../../assets/images/arrow-top.svg";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import PropTypes from 'prop-types';



const StyledCollapse = styled.div`
    height: ${({$height}) => $height}px;
`;

function Collapse({title, content, smallTitle}) {

    const [isDeployed , setDeploy] = useState(false);
    function toggleCollapse() { isDeployed ? setDeploy(false) : setDeploy(true) }

    const [height, setHeight] = useState(50);
    function updateHeight() {
        setHeight(isDeployed ? contentRef.current.scrollHeight + titleRef.current.scrollHeight : titleRef.current.scrollHeight);
    }
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    useEffect(() => {
        updateHeight();
        console.log("new height: " + height);
        window.addEventListener('resize', updateHeight); // Add resize listener
        return () => {
        window.removeEventListener('resize', updateHeight); // Clean up listener
        };
    }),[isDeployed];

    const addClass = smallTitle ? "collapse__title--small-title" : "";

    return (
        <StyledCollapse $height={height} className="collapse">
            <h3 ref={titleRef} className={`collapse__title ${addClass}`}><span>{title}</span><img className={`collapse__title__icon${isDeployed ? " collapse__title__icon--deployed" : ""}`} src={ arrowTop } alt="flèche"  onClick={() => toggleCollapse()}/></h3>
            <div ref={contentRef} className="collapse__content-wrapper">
                { content.map((element,index) => (
                    <p className="collapse__content-wrapper__element" key={`collapse-${index}`}>{element}</p>
                ))}
            </div>
        </StyledCollapse>
    );

}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
    smallTitle: PropTypes.bool
}

Collapse.defaultProps = {
    title: 'menu',
    content: [''],
    smallTitle: false
}


export default Collapse;