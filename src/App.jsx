import React from 'react';
import Start from './Start';
import Game from './Game';
import TryAgain from './Try_again';

const PAGES = {
    START: 'start',
    GAME: 'game',
    END: 'end'
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PAGES.START
        };
    }

    render() {
        if (this.state.page === PAGES.START) {
            return (<Start pushedStart={() => this.setState({ page: PAGES.GAME }) } />);
        } else if (this.state.page === PAGES.GAME){
            return (<Game onGameEnd={() => this.setState({ page: PAGES.END })}/>);
        } else {
            return <TryAgain pushedTryAgain={() => this.setState({ page: PAGES.GAME }) }/>
        }

    }
}

