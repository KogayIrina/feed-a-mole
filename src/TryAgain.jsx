import React from 'react';
import './TryAgain.css';

export default class TryAgain extends React.Component {

    render() {

        return (   
            <div className="Container" >
                    <p className={'GameOver'}>GAME OVER</p>
                    <div className={'Results'}>Your score: {this.props.score} <br />All Moles: {this.props.moles} <br /> You fed {this.props.fedMoles} moles</div>
                    <button className={'TryAgainButton'} onClick={this.props.pushedTryAgain}>Try again!</button>
                    <div className={'Copyright'}>
                        Made by Irina Kogay<br/>
                        <br/>
                        Icons by<br/>
                        Darius Dan, Freepik<br/>
                        and Pixel perfect from <a className={'Link'} href="https://www.flaticon.com/">flaticon.com</a>
                    </div>
            </div> 
        );
    }
}
