import React, {useReducer, useState} from 'react';
import './App.css';
import {Rating, starType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {Switch} from './components/Switch/Switch';
import {MyInput} from './components/MyInput/MyInput';
import MySelect from './components/MySelect/MySelect';
import {
    AccordionReducer,
    accordionReducerType,
    addAgeAccordionAC,
    reduceAgeAccordionAC
} from './components/Accordion/AccordionReducer';


export type DataType = {
    id: number
    value: string

}
const accordionData: accordionReducerType[] = [
    {id: 1, value: 'Viktor', age: 18},
    {id: 2, value: 'Alex', age: 29},
    {id: 3, value: 'Mike', age: 10},
    {id: 4, value: 'Vadym', age: 60}
]
const selectData: DataType[] = [
    {id: 1, value: 'Kiev'},
    {id: 2, value: 'Minsk'},
    {id: 3, value: 'Moscow'},
    {id: 4, value: 'London'},
    {id: 5, value: 'Nevada'}
]

function App() {
    // Rating
    const [ratingValue, setRatingValue] = useState<starType>(1)
    const onClickRatingHandler = (value: starType) => {
        setRatingValue(value)
    }
    // ---  ---
    // Accordion
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [accordionState, dispatch] = useReducer(AccordionReducer, accordionData)
    const toggleAccordion = () => setCollapsed(!collapsed)
    const incrementAge = (id:number) => {
        dispatch(addAgeAccordionAC(id))
    }
    const decrementAge = (id:number) => {
        dispatch(reduceAgeAccordionAC(id))
    }

    // --- ---
    // On-Off
    const [switchOpt, setSwitchOpt] = useState(false)


    return (
        <div className="App">
            <h1>I`m Title your App</h1>
            <Rating starValue={ratingValue} onClickHandler={onClickRatingHandler}/>
            <hr/>
            {/*<UnControlledRating value={4}/>*/}
            {/*<UnControlledRating value={1}/>*/}
            <hr/>
            <Accordion title={'Menu'} incrementAge={incrementAge} decrementAge={decrementAge} collapsed={collapsed} data={accordionState} toggleAccordion={toggleAccordion}/>
            <hr/>
            <Switch switchOpt={switchOpt} toggleSwitch={setSwitchOpt}/>
            <hr/>
            <MyInput defaultValue={'UnControlled Input'}/>
            <hr/>
            <MySelect data={selectData}/>
            <hr/>
        </div>
    );
}


export default App;
