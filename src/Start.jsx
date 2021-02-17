import React from 'react';
import './App.css';

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit() {
        this.props.pushedStart();
    }

    render() {
        return (
            <form className="StartButton" onSubmit={this.handleSubmit}>
                <h2>Let's play!</h2>
                <button type="submit">Start</button>
            </form> 
        );
    }
}

