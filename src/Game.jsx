import React from 'react';
import './Style-game.css'

const ALL_HOLES = 9;
const TIME_FOR_LIFE_MOLES_MS = 2000;
const TIME_FOR_CHECK_INTERVAL = 100;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moles: {}
        }
    }

    StartGame() {

        const interval = setInterval(
            () => {
                const newMoles = {...this.state.moles};
                let newTime = Date.now();

                    for (let index = 0; index < ALL_HOLES; index++) {
                        if(!newMoles[index]) {
                            let probability = Math.random();
                            if(probability < 0.0005) {
                                newMoles[index] = Date.now();
                                console.log(`New moles: ${index} : ${newMoles[index]}`)
                            }
                        }

                        if (newTime - newMoles[index] > TIME_FOR_LIFE_MOLES_MS) {
                            delete newMoles[index];
                            console.log(`${index} deleted ${Date.now()}`);
                        }
                    }
                    this.setState({moles: newMoles});
                    console.log(this.state.moles);
            }, TIME_FOR_CHECK_INTERVAL
        );
    }



    render() {
        this.StartGame();
        const holes = [];

        for (let i = 0; i < 9; i++) {
            holes.push(<div key={i} className={'Hole'}></div> );
        }

        for (const key in this.state.moles) {
                holes.splice(key, 1, <div key={key} className={'MoleHole'}></div>);            
        }

        return (
                <div className={'AllHoles'}>
                    {holes}
                </div>

        )
    }
}
