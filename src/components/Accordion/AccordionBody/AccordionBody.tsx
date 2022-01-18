import React from "react";
import {DataType} from "../../../App";

type AccordionBodyPropsType = {
    data: DataType[]
}

export const AccordionBody = ({data}: AccordionBodyPropsType) => {
  return <ul className="AccordionBody">
      {data.map(t => <li key={t.id}>{t.value}</li>)}
  </ul>

}