import styled from 'styled-components'
import colors from '../../../colors'

export const CardContainer = styled.div`
    background: #fff;
    padding: 2rem;
    width: 100%;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 8px;
    z-index: 10;
    position: relative;

    &:nth-child(1) {
        margin-top: 3rem;
           
    }
   
    &:nth-child(3) {
        margin-bottom: 1rem;
           
    }
   
    
    @media screen and ( min-width: 700px) {
        width: 80%;
        text-align: left;
        margin-bottom: 3rem;
        

    }
    @media screen and ( min-width: 768px) {
        width: 30%;
        margin-bottom: 0;
        background: ${(props) => props.index2 ? 'red' : null};
        position: relative;
        margin-top: 2rem;
         
       &:nth-child(1) {
        top: 0px;
       }
       &:nth-child(2) {
           top: 50px;
       }
       &:nth-child(3) {
        top: 90px;
           
       }


    }

`

export const ImageContainer = styled.div`
    background: ${colors.neutral.veryDarkBlue};
    width: 100px;
    text-align: center;
    border-radius: 50%;
    margin-top: -70px;
    margin-bottom: 1rem;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    @media screen and ( min-width: 700px) {
        position: relative;
        top:0;
        left: -5rem;
        
    }
    @media screen and ( min-width: 768px) {
        width: 50px;
        height: 50px;

    }

`

export const Img = styled.img`
    @media screen and ( min-width: 768px) {
        width: 30px;
        background-size: contain;

    }
`

export const Heading = styled.h3`
    color: ${colors.neutral.veryDarkBlue};
    margin-bottom: 1rem;
    font-size: 1.1rem;
    
`
export const Text = styled.p`
    color: ${colors.neutral.grayishViolet};
    word-wrap: break-word;
    font-size: 1.1rem;

    @media screen and ( min-width: 900px) {
        font-size: 1.2rem;

    }
    
`


