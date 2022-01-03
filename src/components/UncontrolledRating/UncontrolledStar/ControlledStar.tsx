import React from "react";


type StarType = {
    selected: boolean
    onClick: () => void
}
export const UnControlledStar: React.FC<StarType> = ({selected,onClick}) => {
  return <li onClick={onClick}>
      {selected ? <b>Star</b> : "Star"}
  </li>
}