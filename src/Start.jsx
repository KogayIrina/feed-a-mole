import React from 'react';
import './Start.css';
import mole from './images/mole.png';

export default class Start extends React.Component {
    render() {
        return (
            <div className={'Container'}>
                <img src={mole} alt="mole" />
                <h1>FEED-A-MOLE</h1>
                <p className={'Play'}>Let's play!</p>
                <button className={'StartButton'} onClick={this.props.pushedStart}>START</button>
            </div> 
        );
    }
}
