import {AccordionReducer, accordionReducerType, addAgeAccordionAC, reduceAgeAccordionAC} from './AccordionReducer';


test('increment age for person', () => {
    const accordionData: accordionReducerType[] = [
        {id: 1, value: 'Viktor', age: 18},
        {id: 2, value: 'Alex', age: 29},
        {id: 3, value: 'Mike', age: 10},
        {id: 4, value: 'Vadym', age: 60}
    ]

    const newState = AccordionReducer(accordionData,addAgeAccordionAC(accordionData[0].id))
    const newState2 = AccordionReducer(accordionData,addAgeAccordionAC(accordionData[2].id))


    expect(newState[0].age).toBe(19)
    expect(newState[1].age).toBe(29)
    expect(newState[2].age).toBe(10)
    expect(newState2[2].age).toBe(11)

})
test('decrement age for person', () => {
    const accordionData: accordionReducerType[] = [
        {id: 1, value: 'Viktor', age: 18},
        {id: 2, value: 'Alex', age: 29},
        {id: 3, value: 'Mike', age: 10},
        {id: 4, value: 'Vadym', age: 60}
    ]

    const newState = AccordionReducer(accordionData,reduceAgeAccordionAC(accordionData[0].id))
    const newState2 = AccordionReducer(accordionData,reduceAgeAccordionAC(accordionData[2].id))


    expect(newState[0].age).toBe(17)
    expect(newState[1].age).toBe(29)
    expect(newState[2].age).toBe(10)
    expect(newState2[2].age).toBe(9)

})
