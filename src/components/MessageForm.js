import React, { Component } from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Enter message here'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Message value: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MessageForm;