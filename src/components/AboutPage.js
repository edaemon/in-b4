import React from 'react';
import styled from 'styled-components';

const AboutInfoBlock = styled.div`
    margin: 5% 10% 0% 10%;
    max-width: 75%
`

class AboutPage extends React.Component {
    render() {
        return(
            <AboutInfoBlock>
                <p>
                    Welcome to in-b4.com, a simple React app that allows you to enter a
                    message and hide it for a set amount of time. Once that time passes,
                    the message will be revealed and visible to everyone. It's essentially
                    an implementation of the "<a href="https://www.urbandictionary.com/define.php?term=inb4">inb4</a>" 
                    internetism.
                </p>
                <p>
                    For example, if I made a forum post stating "Star Trek is
                    the best sci-fi series ever made", I could create and append this link,
                    which I set to reveal the message after a few hours:
                </p>
                <p>
                    <a href="https://in-b4.com/233655257752666628">
                    https://in-b4.com/233655257752666628</a>
                </p>
                <p>
                    Once the message is revealed you'll be able to see who responded as
                    you predicted.
                </p>
                <p>
                    I created this site so I could learn about some technologies
                    and tools I had not used before. If you'd like to know more about
                    this project (or me), see this post about the process:&nbsp;
                    <a href="https://edaemon.net/posts/in-b4">https://edaemon.net/posts/in-b4</a>
                </p>
                <p>
                    If you just want to see the code:&nbsp;
                    <a href="https://github.com/edaemon/in-b4">https://github.com/edaemon/in-b4</a>
                </p>
            </AboutInfoBlock>
        );
    }
}

export default AboutPage;