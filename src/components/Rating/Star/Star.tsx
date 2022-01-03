import React from "react";


type StarPropsType = {
    selected: boolean
    onClick: () => void
}
export const Star: React.FC<StarPropsType> = ({selected,  onClick}) => {
    return <li onClick={onClick}>
        {selected ? <b>Star </b> : "Star "}
    </li>
}