import React from 'react';
import './TryAgain.css';

export default class TryAgain extends React.Component {

    render() {

        return (
            
            <div className="Conteiner" >
                <div className={'Wrapper'}>
                    <h2 className={'GameOver'}>GAME OVER</h2>
                    <div className={'Results'}>Your score: {this.props.score} <br />All Moles: {this.props.moles} You hitted {this.props.hittedMoles} moles</div>
                    <button className={'TryAgainButton'} onClick={this.props.pushedTryAgain}>Try again!</button>
                    <div className={'Copyright'}>
                        <h6>Made by Irina Kogay</h6>
                        <h6>Icons by:</h6>
                        <h6>Darius Dan, Freepik and Pixel perfect from:</h6>
                        <a className={'Copyright'} href="https://www.flaticon.com/">flaticon.com</a>
                    </div>
                </div>

            </div> 
        );
    }
}
