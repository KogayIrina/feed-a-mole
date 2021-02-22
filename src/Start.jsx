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
            <div className="Conteiner">
                <div>
                    <img className={'Mole'} src={mole} alt="mole" />
                    <h1>WHACK-A-MOLE</h1>
                    <h2 className={"Play"}>Let's play!</h2>
                    <button className={'StartButton'} onClick={this.handleClick}>START</button>
                </div>
            </div> 
        );
    }
}
