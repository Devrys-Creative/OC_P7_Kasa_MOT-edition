// Import React components
import React from "react";

// Import Style
import "../../assets/style/tag.scss";

// Types props
interface TagProps {
    name: string;
    className?: string;
}

// Component to show tag
const Tag: React.FC<TagProps> = ({ name = "", className = ""}) => {
    return (<span className="tag">{ name }</span>);
}


export default Tag;