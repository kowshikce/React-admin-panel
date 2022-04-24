import React, { useState } from 'react';
import "./app.scss";

const App: React.FC<{}> = () => {

    const [visibility, setVisibility] = useState<boolean>(true);

    return (
        <div>
            <h3>Things to do next!</h3>
            <ol>
                <li>Morning Walk</li>
                <li>Day Break from Work</li>
                <li>After noon break from work</li>
            </ol>
        </div>
    )
}

export default App;