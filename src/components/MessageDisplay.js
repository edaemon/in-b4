import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import moment from 'moment';
import axios from 'axios';

const MessageBlock = styled.textarea`
    width: 100%;
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 4px;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${props => props.revealed ? "none" : "lightgray"};
    text-align: ${props => props.revealed ? "left" : "center"};
`

const MessageInfoBlock = styled.div`
    background-color: steelblue;
    color: white;
    border: none;
    border-radius: 2%/20%;
    padding: 10px;
    width: 35%;
`

class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: moment().toString,
            created: moment().toString,
            revealed: false,
            message: 'This message has not been revealed yet.'
        }
    }

    componentDidMount() {
        var id = window.location.pathname.split("/")[1];
        axios.get("/.netlify/functions/readmessage/" + id)
        .then((response) => {
            const reveal = moment(response.data.reveal).format("llll");
            const created = moment(response.data.created).format("llll");
            this.setState({reveal});
            this.setState({created});
            if ("message" in response.data) {
                this.setState({revealed: true});
                this.setState({message: response.data.message});
            }
        })
        .catch((error) => {
            console.log("ERROR: " + error);
        });
    }

    render() {
        return(
            <div id="message-display">
                <MessageBlock revealed={this.state.revealed} value={this.state.message} readonly />
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <MessageInfoBlock>Reveal: {this.state.reveal}</MessageInfoBlock>
                    <MessageInfoBlock>Created: {this.state.created}</MessageInfoBlock>
                </FlexContainer>
            </div>
        );
    }
};

export default MessageDisplay;