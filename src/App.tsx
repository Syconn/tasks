import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Hello World,
                Aidan Haack
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1 style={ {backgroundColor: "red"}}>Hi, im your header</h1>
            <img src={"/logo192.png"} alt={"cool logo"}/>
            <ul>
                <li>Food</li>
                <li>Toast</li>
                <li>Bread</li>
            </ul>

            <Button onClick={() => { console.log("Hello World!") }}>Log Hello World</Button>
        </div>
    );
}

export default App;
