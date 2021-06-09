import React, {useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
    Wrapper,
    Container,
    CopyBtn,
    Text

} from './Styles'

const UrlItem = ({ originalLink, shortedLink }) => {
    const [copy, setCopy] = useState(false)

    const truncate = (str, length) => {
        return str.length > length ? str.substring(0, length) + "..." : str;
    }


    return (
        <Wrapper>
            <Container>
                <Text>{
                    truncate(originalLink, 30)
                }</Text>
            </Container>
            <Container copyContainer>
                <Text shortLink >{shortedLink}</Text>
                <CopyToClipboard
                    text={shortedLink}
                    onCopy={() => setCopy(true)}
                >
                    <CopyBtn className={ copy ? "active" : null} primary>{ copy ? 'Copied!' : 'Copy'}</CopyBtn>
                </CopyToClipboard>

            </Container>

        </Wrapper>

    )
}

export default UrlItem
