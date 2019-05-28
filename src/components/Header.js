import React from 'react';
import styled from 'styled-components';
import FlexContainer from 'react-styled-flexbox';
import ReactModal from 'react-modal';

const HeaderWrapper = styled.div`
    color: steelblue;
`;

const TitleBlock = styled.h1`
    /* ... */
`

const Title = styled.a`
    text-decoration: none;
    :visited {
        color: steelblue;
    }
    :link {
        color: steelblue;
    }
`

const ModalButton = styled.button`
    background-color: steelblue;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;

    :focus {
        outline: 0;
    }
`

const Modal = styled(ReactModal)`
    margin: auto;
    overflow: auto;
    text-align: center;
    background-color: white;
    padding: 5px;
    max-width: 45%;
    margin-top: 5%;
    border-style: solid;
    border-width: 1px;
    border-color: steelblue;
    border-radius: 5px;
    @media (max-width: 700px) {
        max-width: 80%;
        margin-top: 10%;
    }

    :focus {
        outline: 0;
    }
`

Modal.setAppElement('body');

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({modalOpen: true});
    }

    handleCloseModal() {
        this.setState({modalOpen: false});
    }

    render() {
        return (
            <HeaderWrapper>
                <FlexContainer justifySpaceBetween={true} itemsCenter={true}>
                    <TitleBlock>
                        <Title href="/">in-b4</Title>
                    </TitleBlock>
                    <ModalButton onClick={this.handleOpenModal}>Information</ModalButton>
                    <Modal isOpen={this.state.modalOpen}>
                        <p>
                            Welcome to in-b4.com, where you can predict obvious or expected
                            things. Enter a message, set a reveal time, and submit!
                            A URL will be created where you can view your message. When the
                            reveal time has passed, your message will be revealed, allowing
                            you and others to see how well you anticipated the outcome.
                        </p>
                        <p>
                            If you want to learn more please see the full <a href="/about">About</a> page.
                        </p>
                        <ModalButton onClick={this.handleCloseModal}>Close</ModalButton>
                    </Modal>
                </FlexContainer>
            </HeaderWrapper>
        );
    }
}

export default Header;