import React from "react";
import {Star} from "./Star/Star";

export type starType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    onClickHandler: (value: starType) => void
    starValue: starType
}

export const Rating: React.FC<RatingType> = ({ onClickHandler,starValue}) => {


  return  <ul className='Rating'>
      <Star selected={starValue > 0} onClick={() => onClickHandler(1)}/>
      <Star selected={starValue > 1} onClick={() => onClickHandler(2)}/>
      <Star selected={starValue > 2} onClick={() => onClickHandler(3)}/>
      <Star selected={starValue > 3} onClick={() => onClickHandler(4)}/>
      <Star selected={starValue > 4} onClick={() => onClickHandler(5)}/>
  </ul>
}