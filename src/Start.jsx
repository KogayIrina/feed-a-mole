import React from 'react';
import './Start.css';

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
            <form className="Conteiner" onSubmit={this.handleSubmit}>
                <div>
                    <h1>WHACK-A-MOLE</h1>
                    <h2>Let's play!</h2>
                    <button type="submit">START</button>
                </div>
            </form> 
        );
    }
}
