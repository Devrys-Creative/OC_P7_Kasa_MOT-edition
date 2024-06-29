import "../../assets/style/Collapse.scss";
import arrowTop from "../../assets/images/arrow-top.svg";
import { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";


const StyledCollapse = styled.div`
    height: ${({$height}) => $height}px;
`;

function Collapse({title, content}) {

    const [isDeployed , setDeploy] = useState(false);
    function toggleCollapse() { isDeployed ? setDeploy(false) : setDeploy(true) }

    const contentRef = useRef(null);
    let height = isDeployed ? contentRef.current.scrollHeight + 50 : 50;

    return (
        <StyledCollapse $height={height} className="collapse">
            <h3 className="collapse__title" onClick={() => toggleCollapse()}><span>{title}</span><img className={`collapse__title__icon${isDeployed ? " collapse__title__icon--deployed" : ""}`} src={ arrowTop } alt="flèche" /></h3>
            <div ref={contentRef} className="collapse__content-wrapper">
                { content.map((element,index) => (
                    <p className="collapse__content-wrapper__element" key={`collapse-${index}`}>{element}</p>
                ))}
            </div>
        </StyledCollapse>
    );

}

export default Collapse;