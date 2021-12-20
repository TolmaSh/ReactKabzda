import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return <div>star</div>
}

function AppTitle() {
    return <h1>I`m Title your App</h1>
}

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>

    </div>
}

function AccordionTitle() {
    return <h3>Menu</h3>
}
function AccordionBody() {
    return <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
}

export default App;
