import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type AccordionType = {
    title: string
    collapsed: boolean
}
export const Accordion: React.FC<AccordionType> = ({title,collapsed}) => {
  return <div>
      <AccordionTitle title={title}/>
      {!collapsed && <AccordionBody />}
  </div>
}