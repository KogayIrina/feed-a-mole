import React from 'react';
import Start from './Start';
import Game from './Game';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPushedStart: false,
            isPushedTryAgain: false
        };
    }

    render() {
        if (!this.state.isPushedStart && !this.state.isPushedTryAgain) {
            return (<Start pushedStart = {() => this.setState({ isPushedStart: true }) } />);
        } else {
            return (<Game />);
        }

    }
}

