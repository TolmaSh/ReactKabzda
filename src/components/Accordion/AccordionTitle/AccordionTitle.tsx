import React from "react";

type AccordionTitleType = {
  title: string
}
export const AccordionTitle: React.FC<AccordionTitleType> = ({title}) => {
  return <h3>--- {title} ---</h3>
}