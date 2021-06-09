import styled from 'styled-components'
import colors from '../../colors'

import {Button} from '../../globalStyle'


export const Wrapper = styled.section `
    height: 100%;
    font-family: 'Poppins';

`

export const Container = styled.div `
    max-width: 1300px;
    margin:0 auto;
    padding:  0  0 0 2rem;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x:hidden; 

    @media screen and ( max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: space-between;
        height: 100%;
        padding: 0 2rem 5rem 2rem;
    }


`
export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 35%;

    @media screen and ( max-width: 1100px) {
        width: 40%;
    }
    @media screen and ( max-width: 768px) {
        height: 100%;
        width: 100%;
        margin: 20px auto;
        align-items: center;
        padding: 10px 20px;
        text-align: center;       

    }

`
export const Heading = styled.h1 `
    color: ${colors.neutral.veryDarkBlue};
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 10px;


    @media screen and ( max-width: 900px) {
        font-size: 2.5rem;
    }
    @media screen and ( max-width: 768px) {
        line-height: 1.4;
    }
`

export const Paragraph = styled.p `
    font-weight: 500;
    color: ${colors.neutral.grayishViolet};
    line-height:1.7;
    margin-bottom: 40px;
    font-size: 1.1rem;

    @media screen and ( max-width: 900px) {
        font-size: 1rem;
        line-height: 1.8;
    }
    @media screen and ( max-width: 768px) {
        font-size: 1.2rem;
    }
`
export const Btn = styled(Button) `
    padding: 0.7rem 1.8rem;
    color: #fff;
    width: 50%;
    font-size: 1rem;
    &:hover {
        background: ${props => props.primary ? "#2acfcfad" : null} ;
    }

    @media screen and ( max-width: 900px) {
        width: 65%;
    }
    @media screen and ( max-width: 768px) {
        width: 70%;
        
    }
    
`

export const ImageContainer = styled.div `
    height: 70%;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    @media screen and ( max-width: 900px) {
        height:80%;
    }
    @media screen and ( max-width: 768px) {
        height: 100%;
        width: 100%;
    }
`
export const Img = styled.img `
    width: 100%;
    height: 100%;

    @media screen and ( max-width: 1100px) {
        height: 80%;
    }

    @media screen and ( max-width: 768px) {
        height: 80%;
    }
    @media screen and ( max-width: 600px) {
        height: 100%;
        width: 100%
    }
`