import React, { useState } from 'react';
import "./app.scss";

const App: React.FC<{}> = () => {

    const [visibility, setVisibility] = useState<boolean>(true);

    return (
        <div className="bg-gray-200">
            <h3 className="text-2xl text-slate-500 font-bold leading-3">Things to do next!</h3>
            <ol className=' list-none text-2xl text-fuchsia-400'>
                <li className="text-green-500">Morning Walk</li>
                <li>Day Break from Work</li>
                <li>After noon break from work</li>
            </ol>
        </div>
    )
}

export default App;