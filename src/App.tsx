import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {Switch} from "./components/Switch/Switch";

function App() {
    return (
        <div className="App">
            <h1>I`m Title your App</h1>
            <Rating defaultValue={4}/>
            <Rating defaultValue={3}/>
            <Rating defaultValue={1}/>
            <Rating defaultValue={0}/>
            <hr/>
            <Accordion title={'Menu'} />
            <hr/>
            <Accordion title={'Users'} />
            <hr/>
            <Switch/>
        </div>
    );
}


export default App;
