import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import moment from 'moment';
import axios from 'axios';
import { DoubleBounce } from 'styled-spinkit';

const MessageBlock = styled.textarea`
    width: 100%;
    height: 200px;
    border: 2px solid lightgray;
    border-radius: 4px;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
    background-color: ${props => props.revealed ? "none" : "lightgray"};
    text-align: ${props => props.revealed ? "left" : "center"};
    visibility: ${props => props.loading ? "hidden" : "visible"};
`

const MessageInfoBlock = styled.div`
    background-color: steelblue;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    max-width: 40%;
    text-align: center;
    visibility: ${props => props.loading ? "hidden" : "visible"};
`

const Loader = styled(DoubleBounce)`
    display: ${props => props.loading ? "block" : "none"};
`

class MessageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            created: moment.toString,
            reveal: moment.toString,
            revealed: false,
            loading: true,
            message: "This message does not exist."
        }
    }

    componentDidMount() {
        var id = window.location.pathname.split("/")[1];
        axios.get("/.netlify/functions/readmessage/" + id)
        .then((response) => {
            /* Localize the reveal and creation dates */
            const reveal = moment(response.data.reveal).format("llll");
            const created = moment(response.data.created).format("llll");
            this.setState({reveal});
            this.setState({created});

            /* Display the message, unless it has not been revealed */
            if ("message" in response.data) {
                this.setState({revealed: true});
                this.setState({message: response.data.message});
            } else {
                this.setState({message: "This message has not been revealed yet."});
            }
            this.setState({loading: false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({loading: false});
        });
    }

    render() {
        return(
            <div id="message-display">
                <Loader size={100} color={"steelblue"} loading={this.state.loading} />
                <MessageBlock revealed={this.state.revealed} loading={this.state.loading} value={this.state.message} readonly />
                <FlexContainer justifySpaceBetween={true}>
                    <MessageInfoBlock loading={this.state.loading}>Created: {this.state.created}</MessageInfoBlock>
                    <MessageInfoBlock loading={this.state.loading}>Reveal: {this.state.reveal}</MessageInfoBlock>
                </FlexContainer>
            </div>
        );
    }
};

export default MessageDisplay;