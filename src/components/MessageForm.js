import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter message here',
            datetime: new Date(),
        }

        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageChange(event) {
        this.setState({value: event.target.value});
    }

    handleDateTimeChange(datetime) {
        this.setState({datetime});
    }

    handleSubmit(event) {
        alert('Message value: ' + this.state.value + '; date-time: ' + this.state.datetime);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleMessageChange} />
                <DateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default MessageForm;