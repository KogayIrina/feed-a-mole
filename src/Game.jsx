import React from 'react';
import './Style-game.css';
import TryAgain from './Try_again';
import timer from './images/clock.png';
import score from './images/score.png';

const ALL_HOLES = 9;
const TIME_FOR_LIFE_MOLES_MS = 2500;
const TIME_FOR_CHECK_INTERVAL = 100;
// const START_TIME = Date.now();
let ONE_MINUTE_MS = 60000;
const BONUS_TIME_MS = 250;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moles: new Array (9),
            score: 0,
            timer: ONE_MINUTE_MS,
            onGameEnd: false,
            isPushedTryAgain: false
            };
        
        this.StartGame = this.StartGame.bind(this);
        }

        componentDidMount () {
            this.StartGame();
        }

    StartGame() {

        const stopInterval = () => {
            clearInterval(interval);
        }

        const interval = setInterval(
            () => {
            const newMoles = [...this.state.moles];
            let currentTime = Date.now();
            let newTimer = this.state.timer

                if (newTimer >= TIME_FOR_CHECK_INTERVAL) {
                    newTimer = (newTimer - TIME_FOR_CHECK_INTERVAL);
                    this.setState({timer: newTimer});
                } else {
                    stopInterval();
                    this.setState({onGameEnd: true});
                    return;
                }

                for (let index = 0; index < ALL_HOLES; index++) {
                    if(newMoles[index] === undefined) {
                        let probability = Math.random();
                        if (probability < 0.02) {
                            newMoles[index] = Date.now();
                            // console.log(`New moles: ${index} : ${newMoles[index]}`)
                        }
                    }

                    if (currentTime - newMoles[index] > TIME_FOR_LIFE_MOLES_MS) {
                        delete newMoles[index];
                        // console.log(`${index} deleted ${Date.now()}`);
                    }
                }
                this.setState({moles: [...newMoles]});

                // console.log(this.state.moles);
        }, TIME_FOR_CHECK_INTERVAL
        );
    }

    DeletingTheMole(event, key) {
        event.preventDefault();

        let newCounter = this.state.score;
        let newTimer = this.state.timer;
        const newMoles = [...this.state.moles];
        
        if (newMoles[key] !== undefined) {
            newMoles[key] = undefined;
            newCounter += 5;
            newTimer += BONUS_TIME_MS;
        }
        this.setState({moles: [...newMoles], score: newCounter, timer: newTimer});
    }



    render() {

        if (this.state.onGameEnd === false || this.state.isPushedStart === true) {
        const holes = [];

            for (let i = 0; i < 9; i++) {
                holes.push(<div key={i} className={this.state.moles[i] ? 'MoleHole' : 'Hole'} onClick={(event) => this.DeletingTheMole(event, i)} ></div>);
            }
            return (
                <div>
                    <div className={'AllHoles'}>
                        {holes}
                        <div className={'Items'}>
                        <img className={'Image'} src={score} alt="score" />
                            <div className={'Numbers'}>{this.state.score}</div>
                        </div>
                        <div className={'Items'}>
                            <img className={'Image'} src={timer} alt="timer" />
                            <div className={'Numbers'}>{Math.floor(this.state.timer / 1000)}</div>
                        </div>
                    </div>     
                </div>
            )
        } else if (this.state.isPushedTryAgain === false) {
            return <TryAgain pushedTryAgain = {() => this.setState({ isPushedTryAgain: true }) } />
        }
    }
}


