import React from 'react';
import './Start.css';
import mole from './images/mole.png';
import './App.css';

export default class Start extends React.Component {
    render() {
        return (
            <div className='Container'>
                <img src={mole} alt="mole" />
                <h1>FEED-A-MOLE</h1>
                <span className='Play'>Let's play!</span>
                <button className='StartButton' onClick={this.props.onStartPushed}>START</button>
            </div>
        );
    }
}
