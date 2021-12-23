import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {Switch} from "./components/Switch/Switch";

function App() {
    return (
        <div className="App">
            <h1>I`m Title your App</h1>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={1}/>
            <Rating value={0}/>
            <hr/>
            <Accordion title={'Menu'} collapsed={false}/>
            <hr/>
            <Accordion title={'Users'} collapsed={true}/>
            <hr/>
            <Switch/>
        </div>
    );
}


export default App;
