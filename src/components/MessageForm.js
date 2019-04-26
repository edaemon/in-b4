import React, { Component } from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';

const Form = styled.form`
    /* ... */
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    font-family: Arial, Helvetica, sans-serif;
`

const StyledDateTimePicker = styled(DateTimePicker)`
    display: inline-flex;
    position: relative;
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
            datetime: moment().add(1, 'hours').toDate(),
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
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <StyledDateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} />
                    <Submit type="submit" value="Submit" />
                </FlexContainer>
            </Form>
        );
    }
}

export default MessageForm;