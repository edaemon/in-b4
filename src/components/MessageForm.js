import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import FlexContainer from 'react-styled-flexbox';
import DateTimePicker from 'react-datetime-picker';

const Form = styled.form`
    /* ... */
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 4px;
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
            message: '',
            placeholder: 'Enter your message here',
            datetime: moment().add(1, 'hours').toDate(),
        }

        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageChange(event) {
        this.setState({message: event.target.message});
    }

    handleDateTimeChange(datetime) {
        this.setState({datetime});
    }

    handleSubmit(event) {
        //alert('Message message: ' + this.state.message + '; date-time: ' + this.state.datetime);
        this.fetchMessageSubmission();
        event.preventDefault();
    }

    fetchMessageSubmission() {
        axios.post("/.netlify/functions/submitmessage", {
            message: this.state.message,
            reveal: this.state.datetime
        })
        .then(function (response){
            console.log(response);
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <TextArea value={this.state.message} onChange={this.handleMessageChange} placeholder={this.state.placeholder}/>
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <StyledDateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} />
                    <Submit type="submit" value="Submit" />
                </FlexContainer>
            </Form>
        );
    }
}

export default MessageForm;