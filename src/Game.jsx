import React from 'react';
import './Style-game.css'

const ALL_HOLES = 9;
const TIME_FOR_LIFE_MOLES_MS = 2500;
const TIME_FOR_CHECK_INTERVAL = 500;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // moles: new Array (9),
            moles: [1,2,3],
            hitting_mole_counter: 0
            }
        }

    StartGame() {

        setInterval(
            () => {
            const newMoles = [...this.state.moles];
            let newTime = Date.now();

                for (let index = 0; index < ALL_HOLES; index++) {
                    if(newMoles[index] === undefined) {
                        let probability = Math.random();
                        if (probability < 0.0005) {
                            newMoles[index] = Date.now();
                            console.log(`New moles: ${index} : ${newMoles[index]}`)
                        }
                    }

                    if (newTime - newMoles[index] > TIME_FOR_LIFE_MOLES_MS) {
                        delete newMoles[index];
                        console.log(`${index} deleted ${Date.now()}`);
                    }
                }
                this.setState({moles: [...newMoles]});
                console.log(this.state.moles);
        }, TIME_FOR_CHECK_INTERVAL
        );
    }

    DeletingTheMole(event, key) {
        event.preventDefault();

        let newCounter = this.state.hitting_mole_counter;
        const newMoles = [...this.state.moles];
        if (newMoles[key] !== undefined) {
        newMoles[key] = undefined;
        newCounter += 10;
        }
        this.setState({moles: [...newMoles], hitting_mole_counter: newCounter});
    }



    render() {
        this.StartGame();
        const holes = [];

        for (let i = 0; i < 9; i++) {
            holes.push(<div key={i} className={this.state.moles[i] ? 'MoleHole' : 'Hole'} onClick={(event) => this.DeletingTheMole(event, i)} ></div>);
        }

        return (
            <div className="Conteiner">
                <div className={'AllHoles'}>{holes} <div className={'Counter'}>{this.state.hitting_mole_counter}</div> </div>     
            </div>
        )
    }
}


