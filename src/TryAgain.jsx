import React from 'react';
import './TryAgain.css';
import './App.css';

export default class TryAgain extends React.Component {

    render() {
        return (
            <div className='Container TryAgainContainer' >
                    <span className='GameOver'>GAME OVER</span>
                    <div className='Results'>Your score: {this.props.score} <br />All Moles: {this.props.moles} <br /> You fed {this.props.fedMoles} moles</div>
                    <button className='TryAgainButton' onClick={this.props.onTryAgainPushed}>Try again!</button>
                    <div className='Copyright'>
                        Made by Irina Kogay<br/>
                        <br/>
                        Icons by<br/>
                        Darius Dan, Freepik<br/>
                        and Pixel perfect from <a className='Link' href="https://www.flaticon.com/">flaticon.com</a><br/>
                        Sound effects obtained from <a className='Link' href="https://www.zapsplat.com">zapsplat.com</a>
                    </div>
            </div>
        );
    }
}
