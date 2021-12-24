import React from "react";

type AccordionTitleType = {
  title: string
  onClickHandler: () => void
}
const AccordionTitleStyle = {
  cursor: 'pointer'
}

export const AccordionTitle: React.FC<AccordionTitleType> = ({title, onClickHandler}) => {
  return <h3 onClick={onClickHandler} style={AccordionTitleStyle}>--- {title} ---</h3>
}