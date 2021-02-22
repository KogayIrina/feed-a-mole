import React from 'react';
import Start from './Start';
import Game from './Game';
import TryAgain from './TryAgain';

const PAGES = {
    START: 'start',
    GAME: 'game',
    END: 'end'
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastGameScore: undefined,
            allMoles: undefined,
            hittedMoles: undefined,
            page: PAGES.START
        };
    }

    render() {
        if (this.state.page === PAGES.START) {
            return (<Start pushedStart={() => this.setState({ page: PAGES.GAME }) } />);
        } else if (this.state.page === PAGES.GAME){
            return (<Game onGameEnd={(lastGameScore, allMoles, hittedMoles) => this.setState({ page: PAGES.END, lastGameScore, allMoles, hittedMoles })}/>);
        } else {
            return <TryAgain score={this.state.lastGameScore} moles={this.state.allMoles} hittedMoles={this.state.hittedMoles} pushedTryAgain={() => this.setState({ page: PAGES.GAME }) }/>
        }

    }
}

