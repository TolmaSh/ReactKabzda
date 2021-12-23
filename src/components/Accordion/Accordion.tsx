import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";

type AccordionType = {
    title: string
}
export const Accordion: React.FC<AccordionType> = ({title}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toogleAccordion = () => {
        if ( !collapsed) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
    }
  return <div>
      <AccordionTitle title={title} onClickHandler={toogleAccordion} />
      {!collapsed && <AccordionBody />}
  </div>
}