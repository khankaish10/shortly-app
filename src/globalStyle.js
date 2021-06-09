import styled, { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const Button = styled.button`
    cursor: pointer;
    background: ${({ primary }) => primary ? colors.primary.cyan : 'transparent'};
    color: ${({ primary }) => primary ? "white" : colors.neutral.grayishViolet};
    border: none;
    outline: none;
    padding: 10px 25px;
    border-radius: 50px;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: ${props => props.h4 || props.f2 ? '1rem' : null};
    width: ${props => props.h4 ? '90%' : null};

    &:hover {
        background: ${props => props.primary ? "#2acfcfad" : null} ;
    }
`

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }

`
export default GlobalStyle;