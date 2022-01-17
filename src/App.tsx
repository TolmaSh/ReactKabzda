import React, {useState} from 'react';
import './App.css';
import {Rating, starType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {Switch} from "./components/Switch/Switch";
import {UnControlledRating} from "./components/UncontrolledRating/ControlledRating";
import {MyInput} from "./components/MyInput/MyInput";


function App() {
    // Rating
    const [ratingValue, setRatingValue] = useState<starType>(1)
    const onClickRatingHandler = (value: starType) => {
        setRatingValue(value)
    }
    // ---  ---
    // Accordion
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const toggleAccordion = () => setCollapsed(!collapsed)

    // --- ---
    // On-Off
    const [switchOpt, setSwitchOpt] = useState(false)


    return (
        <div className="App">
            <h1>I`m Title your App</h1>
            <Rating starValue={ratingValue} onClickHandler={onClickRatingHandler}/>
            <hr/>
            <UnControlledRating value={4}/>
            <UnControlledRating value={1}/>
            <hr/>
            <Accordion title={'Menu'} collapsed={collapsed} toggleAccordion={toggleAccordion}/>
            <hr/>
            <Switch switchOpt={switchOpt} onChangeSwitch={setSwitchOpt}/>
            <hr/>
            <MyInput/>
            <hr/>
        </div>
    );
}


export default App;
