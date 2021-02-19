import React from 'react';
import './Style-game.css'

const ALL_HOLES = 9;
const TIME_FOR_LIFE_MOLES_MS = 2500;
const TIME_FOR_CHECK_INTERVAL = 100;
const START_TIME = Date.now();
let ONE_MINUTE_MS = 60000;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moles: new Array (9),
            score: 0,
            timer: ONE_MINUTE_MS
            };
        
        this.StartGame = this.StartGame.bind(this);
        }

        componentDidMount () {
            this.StartGame();
        }

    StartGame() {

        const interval = setInterval(
            () => {
            const newMoles = [...this.state.moles];
            let currentTime = Date.now();
            let newTimer = this.state.timer

            newTimer = (newTimer - TIME_FOR_CHECK_INTERVAL);
            console.log(newTimer);
            this.setState({timer: newTimer});
        

                for (let index = 0; index < ALL_HOLES; index++) {
                    if(newMoles[index] === undefined) {
                        let probability = Math.random();
                        if (probability < 0.01) {
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
        const newMoles = [...this.state.moles];
        
        if (newMoles[key] !== undefined) {
            newMoles[key] = undefined;
            newCounter += 10;
        }
        this.setState({moles: [...newMoles], score: newCounter});
    }



    render() {
        const holes = [];

        for (let i = 0; i < 9; i++) {
            holes.push(<div key={i} className={this.state.moles[i] ? 'MoleHole' : 'Hole'} onClick={(event) => this.DeletingTheMole(event, i)} ></div>);
        }

        return (
            <div className="Conteiner">
                <div className={'AllHoles'}>
                    {holes}
                    <div className={'Counter'}>{this.state.score}</div>
                    <div className={'Timer'}>{Math.floor(this.state.timer / 1000)}</div>
                </div>     
            </div>
        )
    }
}


