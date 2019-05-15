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
        .then(function (response) {
            this.state.reveal = response.date.reveal;
            this.state.created = response.data.created;
            if ("message" in response.data) {
                this.state.revealed = true;
                this.state.message = response.data.message;
            }
        })
        .catch(function (error) {
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