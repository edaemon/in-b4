import React, { Component } from 'react';
import styled from 'styled-components';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const Form = styled.form`
    /* ... */
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
`

const StyledDateTimePicker = styled(DateTimePicker)`
    /* ... */
`

const Submit = styled.input`
    background-color: steelblue;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10%/20%;
`

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
            <Form onSubmit={this.handleSubmit}>
                <TextArea value={this.state.value} onChange={this.handleMessageChange} />
                <StyledDateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} />
                <Submit type="submit" value="Submit" />
            </Form>
        );
    }
}

export default MessageForm;