import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import moment from 'moment';
import axios from 'axios';

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
            <div id="debug">
                Reveal: {this.state.reveal}
                Revealed: {this.state.revealed}
                Created: {this.state.created}
                Message: {this.state.message}
            </div>
        );
    }
};

export default MessageDisplay;