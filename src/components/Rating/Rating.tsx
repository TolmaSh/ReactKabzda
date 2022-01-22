import React from "react";
import {Star} from "./Star/Star";
import './Rating.css'

export type starType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    /**
     * Optional click handler
     */
    onClickHandler: (value: starType) => void
    /**
     * Default value of star
     */
    starValue: starType
    /**
     * What star color to use
     */
    starColor?: string
}

export const Rating: React.FC<RatingType> = ({ onClickHandler,starValue,starColor}) => {


  return  <ul className='Rating'>
      <Star selected={starValue > 0} onClick={() => onClickHandler(1)} starColor={starColor}/>
      <Star selected={starValue > 1} onClick={() => onClickHandler(2)} starColor={starColor}/>
      <Star selected={starValue > 2} onClick={() => onClickHandler(3)} starColor={starColor}/>
      <Star selected={starValue > 3} onClick={() => onClickHandler(4)} starColor={starColor}/>
      <Star selected={starValue > 4} onClick={() => onClickHandler(5)} starColor={starColor}/>
  </ul>
}