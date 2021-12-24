import React, { useState} from "react";
import {UncontrolledStar} from "./UncontrolledStar/UncontrolledStar";



export const UncontrolledRating = () => {
    const [starValue, setStarValue] = useState( 0 )

  return  <ul className="unControlledRating">
      <UncontrolledStar selected={starValue > 0}/>
      <UncontrolledStar selected={starValue > 1}/>
      <UncontrolledStar selected={starValue > 2}/>
      <UncontrolledStar selected={starValue > 3}/>
      <UncontrolledStar selected={starValue > 4}/>
  </ul>
}