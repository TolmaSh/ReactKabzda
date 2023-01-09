



export type accordionReducerType = {
    id: number
    value: string
    age: number
}
export const AccordionReducer = (state: accordionReducerType[], action: ActionTypes):accordionReducerType[] => {
    switch (action.type) {
        case 'ADD-AGE':
            return state.map(person => action.payload.id === person.id ? ({...person,age: person.age + 1}) : person)
        case 'REDUCE-AGE':
            return state.map(person => action.payload.id === person.id ? ({...person,age: person.age - 1}) : person)
        default:
            throw new Error('bad action')
    }
}


export type ActionTypes = AddAgeAccordionActionType | ReduceAgeAccordionActionType
type AddAgeAccordionActionType = ReturnType<typeof addAgeAccordionAC>
export const addAgeAccordionAC = (id:number) => {
    return {
        type: 'ADD-AGE',
        payload: {id}
    } as const
}

type ReduceAgeAccordionActionType = ReturnType<typeof reduceAgeAccordionAC>
export const reduceAgeAccordionAC = (id:number) => {
    return {
        type: 'REDUCE-AGE',
        payload: {id}
    } as const
}
