import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import FlexContainer from 'react-styled-flexbox';
import { DateTimePicker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
import { WaveLoading } from 'styled-spinkit';

const Form = styled.form`
    /* ... */
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
`

const StyledDateTimePicker = styled(DateTimePicker)`
    display: inline-flex;
    position: relative;
    padding-right: 10px;
`

const Submit = styled.input`
    background-color: steelblue;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 10%/20%;
    display: ${props => props.loading ? "none" : "inline-flex"};
`

const Loader = styled(WaveLoading)`
    padding: 0px;
    margin: 0px;
    display: ${props => props.loading ? "inline-flex" : "none"};
`

moment.locale("en");
momentLocalizer();

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            placeholder: 'Enter your message here',
            datetime: moment().add(1, 'hours').toDate(),
            submitting: false
        }

        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleDateTimeChange(datetime) {
        this.setState({datetime});
    }

    handleSubmit(event) {
        this.fetchMessageSubmission();
        event.preventDefault();
    }

    fetchMessageSubmission() {
        this.setState({submitting: true});
        axios.post("/.netlify/functions/submitmessage", {
            message: this.state.message,
            reveal: this.state.datetime
        })
        .then((response) => {
            console.log(response);
            window.location.href = response.headers.location;
        })
        .catch((error) => {
            alert(error.response.data);
            this.setState({submitting: false});
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <TextArea value={this.state.message} onChange={this.handleMessageChange} placeholder={this.state.placeholder} maxLength="1000" />
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <StyledDateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} max={moment().add(1, 'week').toDate()} dropUp />
                    <Submit type="submit" value="Submit" loading={this.state.submitting} />
                    <Loader size={35} color={"steelblue"} loading={this.state.submitting} />
                </FlexContainer>
            </Form>
        );
    }
}

export default MessageForm;