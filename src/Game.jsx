import React from 'react';
import './Game.css';
import timer from './images/clock.png';
import score from './images/score.png';

const ALL_HOLES = 9;
const TIME_FOR_LIFE_MOLES_MS = 2500;
const TIME_FOR_CHECK_INTERVAL = 100;
let ONE_MINUTE_MS = 60000;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moles: new Array(9),
            score: 0,
            timer: ONE_MINUTE_MS,
        };
        this.allMoles = 0;
        this.fedMoles = 0;
        
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
            let currentCountMoles = this.allMoles;
            let currentTime = Date.now();
            let timeLeft = this.state.timer

                if (timeLeft >= TIME_FOR_CHECK_INTERVAL) {
                    timeLeft = (timeLeft - TIME_FOR_CHECK_INTERVAL);
                    this.setState({timer: timeLeft});
                } else {
                    stopInterval();
                    this.props.onGameEnd(this.state.score, this.allMoles, this.fedMoles);
                    return;
                }

                for (let index = 0; index < ALL_HOLES; index++) {
                    if(newMoles[index] === undefined) {
                        let probability = Math.random();
                        if (probability < 0.02) {
                            newMoles[index] = Date.now();
                            currentCountMoles += 1;
                        }
                    }

                    if (currentTime - newMoles[index] > TIME_FOR_LIFE_MOLES_MS) {
                        delete newMoles[index];
                    }
                }
                this.allMoles = currentCountMoles;
                this.setState({moles: [...newMoles]});
        }, TIME_FOR_CHECK_INTERVAL
        );
    }

    onMoleFed(key) {
        let newScore = this.state.score;
        let countFedMoles = this.fedMoles;
        const newMoles = [...this.state.moles];
        
        if (newMoles[key] !== undefined) {
            newMoles[key] = undefined;
            newScore += 5;
            countFedMoles += 1;
        }
        this.fedMoles = countFedMoles;
        this.setState({moles: [...newMoles], score: newScore});
    }

    render() {
        const holes = [];

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


