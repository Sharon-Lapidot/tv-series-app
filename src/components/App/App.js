import React from 'react';
import './App.css';
import Main from "../Main/Main";


function App() {
    return (

            <div className="App">
                <header className="App-header">
                    <p>
                        TV Series List
                    </p>
                </header>

                <div className={'series'} style={{'marginTop': '15px'}}>
                    <Main/>
                </div>
            </div>

    );
}

export default App;
