import React, { Component } from 'react';
import Popup from "reactjs-popup";

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    in-b4
                </h1>
                <Popup trigger={<button>What is this?</button>} position="right center">
                    <div>
                        This is in-b4.com, where you can predict obvious or expected
                        things. Simply enter a message, set a reveal time, and submit!
                        Copy and paste the resulting link wherever you like. When the
                        reveal time has passed, your message will be revealed, allowing
                        you and others to see how well you anticipated the outcome.
                    </div>
                </Popup>
            </div>
        );
    }
}

export default Header;