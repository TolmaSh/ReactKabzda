import React from "react";
import {accordionReducerType} from '../AccordionReducer';

type AccordionBodyPropsType = {
    data: accordionReducerType[]
    incrementAge: (id:number) => void
    decrementAge: (id:number) => void
}

export const AccordionBody = ({data,incrementAge,decrementAge}: AccordionBodyPropsType) => {

  return <ul className="AccordionBody">
      {data.map(t => {
          const incrementOnClickHanlder = () => {
              incrementAge(t.id)
          }
          const decrementOnClickHanlder = () => {
              decrementAge(t.id)
          }
        return <li key={t.id}>
            {t.value},
            age:{t.age}
            <button onClick={incrementOnClickHanlder}>+</button>
            <button onClick={decrementOnClickHanlder}>-</button>
        </li>
      })}
  </ul>

}