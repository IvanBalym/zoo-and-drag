import React, { Component } from 'react';
import ZoomBoxContainer from './containers/ZoomBox';
import ButtonsContainer from './containers/Buttons';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <ButtonsContainer />
                <ZoomBoxContainer />
            </div>
        );
    }
}

export default App;