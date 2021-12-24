import React from "react";

type StarType = {
    selected: boolean
}
export const Star: React.FC<StarType> = ({selected}) => {
    return selected ? <li><b>Star</b></li> : <li>Star</li>
}