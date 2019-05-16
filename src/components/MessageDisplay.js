import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import moment from 'moment';
import axios from 'axios';

const MessageInfoBlock = styled.div`
    background-color: steelblue;
    color: white;
    border: none;
    border-radius: 2%/20%;
    padding: 10px;
    width: 35%;
`

const MessageBlock = styled.textarea`
    width: 100%;
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 4px;
    pointer-events: none;
`

class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: moment().toString,
            created: moment().toString,
            revealed: false,
            message: ''
        }
    }

    componentDidMount() {
        var id = window.location.pathname.split("/")[1];
        axios.get("/.netlify/functions/readmessage/" + id)
        .then((response) => {
            this.setState({reveal: response.data.reveal});
            this.setState({created: response.data.created});
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
                <MessageBlock value={this.state.message} readonly />
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <MessageInfoBlock>Reveal: {this.state.reveal}</MessageInfoBlock>
                    <MessageInfoBlock>Created: {this.state.created}</MessageInfoBlock>
                </FlexContainer>
            </div>
        );
    }
};

export default MessageDisplay;