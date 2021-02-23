import React from 'react';
import './Game.css';
import timer from './images/clock.png';
import score from './images/score.png';
import biteSound from './sounds/bite.mp3';

const HOLES_COUNT = 9;
const TIME_FOR_LIFE_MOLES_MS = 2500;
const TIME_FOR_CHECK_STARTGAME_INTERVAL_MS = 100;
const ONE_MINUTE_MS = 60000;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moles: new Array(HOLES_COUNT),
            score: 0,
            timer: ONE_MINUTE_MS,
        };
        this.molesShown = 0;
        this.molesFed = 0;
        this.biteAudio = new Audio(biteSound);
        this.startGame = this.startGame.bind(this);
    }

    componentDidMount () {
        this.startGame();
    }

    startGame() {
        //in this interval function we create and remove moles,
        //we also set a timer and repeat the current function until the timer expires
        const interval = setInterval(() => {
            if (this.state.timer < TIME_FOR_CHECK_STARTGAME_INTERVAL_MS) {
                clearInterval(interval);
                this.props.onGameEnd(this.state.score, this.molesShown, this.molesFed);
                return;
            }

            const moles = [...this.state.moles];
            const currentTime = Date.now();

            for (let i = 0; i < HOLES_COUNT; i++) {
                if (moles[i] === undefined) {
                    const probability = Math.random();

                    if (probability < 0.02) {
                        moles[i] = Date.now();
                        this.molesShown += 1;
                    }
                } else if (currentTime - moles[i] > TIME_FOR_LIFE_MOLES_MS) {
                    moles[i] = undefined;
                }
            }

            this.setState({
                moles,
                timer: this.state.timer - TIME_FOR_CHECK_STARTGAME_INTERVAL_MS
            });
        }, TIME_FOR_CHECK_STARTGAME_INTERVAL_MS);
    }

    //this component allows to remove moles with a click,
    //increases the score, and calculates how many moles we fed
    onMoleFed(key) {
        if (this.state.moles[key] === undefined) {
            return;
        }

        const moles = [...this.state.moles];
        let newScore = this.state.score;
        moles[key] = undefined;
        newScore += 5;
        this.molesFed += 1;
        this.biteAudio.play();
        this.setState({ moles, score: newScore });
    }

    render() {
        const holes = [];
        //The curious fact. If we were to use var instead of let, this function wouldn't work
        for (let i = 0; i < 9; i++) {
            holes.push(<div key={i} className={this.state.moles[i] ? 'MoleHole' : 'Hole'} onClick={() => this.onMoleFed(i)} ></div>);
        }
        return (
            <div>
                <div className={'AllHoles'}>
                    {holes}
                    <div className={'Stat'}>
                        <img src={score} alt="score"/>
                        <span>{this.state.score}</span>
                    </div>
                    <div className={'Stat'}>
                        <img src={timer} alt="timer"/>
                        <span>{Math.floor(this.state.timer / 1000)}</span>
                    </div>
                </div>
            </div>
        )
    }
}
