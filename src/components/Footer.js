import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';

const FooterBlock = styled.div`
    position: absolute;
    margin: auto;
    text-align: center;
    bottom: 50px;
    width: 50%;
    @media (max-width: 700px) {
        width: 90%;
    }
`

class Footer extends React.Component {
    render() {
        return(
            <FooterBlock>
                <p>
                    <a href="/about">About</a> |&nbsp;
                    <a href="/terms">Terms and Conditions</a> |&nbsp;
                    <a href="/disclaimer">Disclaimer</a>
                </p>
            </FooterBlock>
        );
    }
}

export default Footer;