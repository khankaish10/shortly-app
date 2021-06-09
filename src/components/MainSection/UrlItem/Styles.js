import styled from 'styled-components'
import colors from '../../../colors'

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border-radius: 10px;
    

    @media screen and ( max-width: 600px) {
        flex-direction: column;
    }

`
export const Container = styled.div `
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media screen and ( max-width: 800px) {
        flex-direction: ${props => props.copyContainer ? 'column' : null};
        width: 100%;
        align-items: flex-start;
        border-radius:  ${props => props.copyContainer ? '0 0 5px 5px' : '5px 5px 0 0 '};
        border-bottom: ${props => props.copyContainer ? null : `1px solid ${colors.neutral.gray}`};
    }
`
export const Text = styled.p `
    color: ${props => props.shortLink ? colors.primary.cyan : colors.neutral.veryDarkBlue};

    @media screen and ( max-width: 800px) {
        margin-bottom: ${props => props.shortLink ? '1rem' : null};
        font-size: 15px;
    }

`
export const CopyBtn = styled.button `
    margin-left: 1rem;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${props => props.className === "active" ? colors.primary.darkViolet : colors.primary.cyan };
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.1rem;
    &:hover{
        background: ${props => props.className === "active" ? null : '#2acfcfad'}  ;
    }

    @media screen and ( max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`