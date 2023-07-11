import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
import "./style.css"
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))
const prueba = ReactDOM.createRoot(document.getElementById('prueba'))

function Saludo() {
    return <div className="main" >
        <div className="square">
            
            <br></br>
            <div className="topsquare">
                <p>
                    HELLO!</p>
            </div>
            <div className="bottomsquare">
                <b>Mi name is Samuel</b>   
                <p>Quiero aprender a programar con react</p>
            </div>
        </div>
    </div>
}

root.render(
    <div>
        {Saludo()}
    </div>
)