import React, {SetStateAction, useState} from "react";
import {Star} from "./Star/Star";

type RatingType = {
    defaultValue: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: React.FC<RatingType> = ({ defaultValue}) => {
    const [starValue, setStarValue] = useState( defaultValue )
    const onClickHandler = (val: SetStateAction<0 | 1 | 2 | 3 | 4 | 5>) => {
        setStarValue(val)
    }
  return  <ul>
      <Star  selected={starValue > 0}/><button onClick={() => onClickHandler(1)}>1</button>
      <Star  selected={starValue > 1}/><button onClick={() => onClickHandler(2)}>2</button>
      <Star  selected={starValue > 2}/><button onClick={() => onClickHandler(3)}>3</button>
      <Star  selected={starValue > 3}/><button onClick={() => onClickHandler(4)}>4</button>
      <Star  selected={starValue > 4}/><button onClick={() => onClickHandler(5)}>5</button>
  </ul>
}