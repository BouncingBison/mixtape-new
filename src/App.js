import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SongContainer from "./SongContainer/SongContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Mixtape</h2>
                </div>
                <SongContainer />
            </div>
        );
    }
}

export default App;