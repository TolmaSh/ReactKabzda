import React from "react";

type StarType = {
    selected: boolean
}
export const Star: React.FC<StarType> = ({selected}) => {
    if (selected) {
        return <li ><b>Star</b></li>
    } else {
        return <li >Star</li>
    }

}