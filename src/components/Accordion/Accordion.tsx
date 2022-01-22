import React from "react";
import {AccordionTitle} from "./AccordionTitle/AccordionTitle";
import {AccordionBody} from "./AccordionBody/AccordionBody";
import {DataType} from "../../App";


type AccordionType = {
    title?: string
    collapsed: boolean
    toggleAccordion: () => void
    data: DataType[]
}
export const Accordion: React.FC<AccordionType> = ({
                                                       title = 'Default Title',
                                                       collapsed,
                                                       toggleAccordion,
                                                       data
                                                   }) => {

    return <div>
        <AccordionTitle title={title} onClickHandler={toggleAccordion}/>
        {!collapsed && <AccordionBody data={data} />}
    </div>
}