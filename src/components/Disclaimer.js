import React from 'react';
import styled from 'styled-components';

const DisclaimerBlock = styled.div`
    margin: 5% 10% 0% 10%;
    max-width: 75%
`

class Disclaimer extends React.Component {
    render() {
        return (
            <DisclaimerBlock>
                <h1>Disclaimer</h1>

                <p>Last updated: May 28, 2019</p>

                <p>The information contained on https://in-b4.com website (the "Service") is for general information purposes only.</p>

                <p>in-b4 assumes no responsibility for errors or omissions in the contents on the Service.</p>

                <p>In no event shall in-b4 be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. in-b4 reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice. This Disclaimer  for in-b4 has been created with the help of <a href="https://www.termsfeed.com/">TermsFeed</a>.</p>

                <p>in-b4 does not warrant that the website is free of viruses or other harmful components.</p>

                <h2>External links disclaimer</h2>

                <p>https://in-b4.com website may contain links to external websites that are not provided or maintained by or in any way affiliated with in-b4</p>

                <p>Please note that the in-b4 does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
            </DisclaimerBlock>
        );
    }
}

export default Disclaimer;