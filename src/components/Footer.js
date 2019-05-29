import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    position: absolute;
    margin: auto;
    text-align: center;
    bottom: 50px;
    width: 50%;
    @media (max-width: 700px) {
        width: 90%;
        font-size: 60%;
    }
`

const Link = styled.a`
    text-decoration: none;
    :visited {
        color: slategray;
    }
    :link {
        color: slategray;
    }
`

class Footer extends React.Component {
    render() {
        return(
            <FooterBlock>
                <Link href="/about">About</Link> |&nbsp;
                <Link href="/terms">Terms and Conditions</Link> |&nbsp;
                <Link href="/disclaimer">Disclaimer</Link>
            </FooterBlock>
        );
    }
}

export default Footer;