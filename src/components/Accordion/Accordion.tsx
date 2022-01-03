import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type AccordionType = {
    title: string
    collapsed: boolean
    toggleAccordion: () => void
}
export const Accordion: React.FC<AccordionType> = ({title,collapsed,toggleAccordion}) => {

  return <div>
      <AccordionTitle title={title} onClickHandler={toggleAccordion} />
      {!collapsed && <AccordionBody />}
  </div>
}