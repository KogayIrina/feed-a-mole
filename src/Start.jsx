import React from 'react';
import './Start.css';
import mole from './images/mole.png';

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.pushedStart();
    }

    render() {
        return (
            <div className="Container">
                <img className={'Mole'} src={mole} alt="mole" />
                <h1>FEED-A-MOLE</h1>
                <p className={"Play"}>Let's play!</p>
                <button className={'StartButton'} onClick={this.handleClick}>START</button>
            </div> 
        );
    }
}
