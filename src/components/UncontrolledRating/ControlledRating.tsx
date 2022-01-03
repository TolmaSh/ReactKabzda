import React, { useState} from "react";
import {UnControlledStar} from "./UncontrolledStar/ControlledStar";



type propsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UnControlledRating: React.FC<propsType> = ({value}) => {
    const [starValue, setStarValue] = useState( value )

  return  <ul className="ControlledRating">
      <UnControlledStar selected={starValue > 0} onClick={() => setStarValue(1)}/>
      <UnControlledStar selected={starValue > 1} onClick={() => setStarValue(2)}/>
      <UnControlledStar selected={starValue > 2} onClick={() => setStarValue(3)}/>
      <UnControlledStar selected={starValue > 3} onClick={() => setStarValue(4)}/>
      <UnControlledStar selected={starValue > 4} onClick={() => setStarValue(5)}/>
  </ul>
}