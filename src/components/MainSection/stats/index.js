import React from 'react'

import {
    CardContainer,
    ImageContainer,
    Img,
    Heading,
    Text,
} from './StatStyles'

const Stats = ({ heading, content, image }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <Img src={image} />
            </ImageContainer>
            <Heading>{heading}</Heading>
            <Text>{content}</Text>
        </CardContainer>
    )
}

export default Stats
