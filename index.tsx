import React from 'react';
import * as  ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './src/app';




const HelloWorld: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <h1> Hello World {name}</h1>
            <App></App>
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <HelloWorld name='React-18' />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);