import React from 'react';
import Start from './Start';
import Game from './Game';
import TryAgain from './TryAgain';

const PAGES = {
    START: 'start',
    GAME: 'game',
    TRY_AGAIN: 'try-again'
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastGameScore: undefined,
            lastGameMolesShown: undefined,
            lastGameMolesFed: undefined,
            page: PAGES.START
        };
    }

    render() {
        if (this.state.page === PAGES.START) {
            return (<Start onStartPushed={() => this.setState({ page: PAGES.GAME })} />);
        } else if (this.state.page === PAGES.GAME) {
            return (<Game onGameEnd={(lastGameScore, lastGameMolesShown, lastGameMolesFed) => this.setState({
                page: PAGES.TRY_AGAIN,
                lastGameScore,
                lastGameMolesShown,
                lastGameMolesFed
            })}/>);
        } else {
            return <TryAgain score={this.state.lastGameScore} moles={this.state.lastGameMolesShown} fedMoles={this.state.lastGameMolesFed} onTryAgainPushed={() => this.setState({ page: PAGES.GAME })} />
        }
    }
}

