import React from 'react';
import {AccordionTitle} from './AccordionTitle/AccordionTitle';
import {AccordionBody} from './AccordionBody/AccordionBody';
import {accordionReducerType} from './AccordionReducer';


type AccordionType = {
    title?: string
    collapsed: boolean
    toggleAccordion: () => void
    data: accordionReducerType[]
    incrementAge: (id:number) => void
    decrementAge: (id:number) => void
}
export const Accordion: React.FC<AccordionType> = ({
                                                       title = 'Default Title',
                                                       collapsed,
                                                       toggleAccordion,
                                                       data,
                                                       incrementAge,
                                                       decrementAge
                                                   }) => {

    return <div>
        <AccordionTitle title={title} onClickHandler={toggleAccordion}/>
        {!collapsed && <AccordionBody data={data} incrementAge={incrementAge} decrementAge={decrementAge}/>}
    </div>
}