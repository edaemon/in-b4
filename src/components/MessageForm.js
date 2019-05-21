import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import FlexContainer from 'react-styled-flexbox';
import { DateTimePicker } from 'react-widgets';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
import { WaveLoading } from 'styled-spinkit';
import ReactModal from 'react-modal';

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

const SubmitLoader = styled(WaveLoading)`
    padding: 0px;
    margin: 0px;
    display: ${props => props.loading ? "inline-flex" : "none"};
`

const ErrorModal = styled(ReactModal)`
    margin: auto;
    overflow: auto;
    text-align: center;
    background-color: white;
    padding: 5px;
    max-width: 30%;
    margin-top: 5%;
    @media (max-width: 700px) {
        max-width: 65%;
        margin-top: 10%;
    }
`

const ModalButton = styled.button`
    background-color: steelblue;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
`

moment.locale("en");
momentLocalizer();
ErrorModal.setAppElement('body');

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            placeholder: 'Enter your message here',
            datetime: moment().add(1, 'hours').toDate(),
            submitting: false,
            errorModal: false,
            errorModalMessage: ''
        }

        this.handleDateTimeChange = this.handleDateTimeChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrorModalClose = this.handleErrorModalClose.bind(this);
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

    handleErrorModalClose () {
        this.setState({errorModal: false});
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
            this.setState({submitting: false, errorModalMessage: error.response.data, errorModal: true});
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <ErrorModal isOpen={this.state.errorModal}>
                    <p>{this.state.errorModalMessage}</p>
                    <ModalButton onClick={this.handleErrorModalClose}>Close</ModalButton>
                </ErrorModal>
                <TextArea value={this.state.message} onChange={this.handleMessageChange} placeholder={this.state.placeholder} maxLength="1000" />
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <StyledDateTimePicker value={this.state.datetime} onChange={this.handleDateTimeChange} max={moment().add(1, 'week').toDate()} dropUp />
                    <Submit type="submit" value="Submit" loading={this.state.submitting} />
                    <SubmitLoader size={35} color={"steelblue"} loading={this.state.submitting} />
                </FlexContainer>
            </Form>
        );
    }
}

export default MessageForm;