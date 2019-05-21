import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import Popup from 'reactjs-popup';

const HeaderWrapper = styled.div`
    color: steelblue;
`;

const TitleBlock = styled.h1`
    /* ... */
`

const Title = styled.a`
    text-decoration: none;
    &:visited {
        color: steelblue;
    }
`

const StyledPopup = styled(Popup)`
    color: black;
`

const Trigger = styled.button`
    background-color: steelblue;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px/5px;
`

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <TitleBlock>
                        <Title href="/">in-b4</Title>
                    </TitleBlock>
                    <StyledPopup trigger={<Trigger>What is this?</Trigger>} modal contentStyle={{ width: '400px' }}>
                        <span>
                            This is in-b4.com, where you can predict obvious or expected
                            things. Simply enter a message, set a reveal time, and submit!
                            Copy and paste the resulting link wherever you like. When the
                            reveal time has passed, your message will be revealed, allowing
                            you and others to see how well you anticipated the outcome.
                        </span>
                    </StyledPopup>
                </FlexContainer>

            </HeaderWrapper>
        );
    }
}

export default Header;