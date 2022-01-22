import React from "react";


type StarPropsType = {
    selected: boolean
    onClick: () => void
    starColor?: string
}
export const Star: React.FC<StarPropsType> = ({selected,  onClick,starColor}) => {
    return <li onClick={onClick} style={{color: starColor}}>
        {selected ? <b>Star </b> : "Star "}
    </li>
}