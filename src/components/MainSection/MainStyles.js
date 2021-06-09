import styled from 'styled-components'
import colors from '../../colors'
import { Button } from '../../globalStyle'
import shortenDesktop from '../../images/bg-shorten-desktop.svg'
import shortenMobile from '../../images/bg-shorten-mobile.svg'

export const Wrapper = styled.section`
    background-color: #ececec6e;
    padding-bottom: 60px;
`

export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    padding: 0 2rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Form = styled.form`
    background-color: ${colors.primary.darkViolet};
    background-image: url(${shortenDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    position: relative; 
    top: -4.4rem; 
    height: 150px;
    width: 100%;
   
    @media screen and (max-width: 768px) {
        padding:1.4rem  ;
        flex-direction: column;
        height: 180px;
        background-image: url(${shortenMobile});
        background-position: right ;
    }
    
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding-left: 2rem;
    height: 100%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 0;
        margin-bottom: 1rem;


}
    
`
export const Input = styled.input`
     padding: 15px 20px;
    margin-right: 40px; 
    border-radius: 5px;
    outline: none ;
    border: ${props => props.className.includes("active") ? `2px solid ${colors.secondary.red}` : 'none'};
    font-size: 1.1rem;
    color: ${colors.neutral.gray};
    font-weight: 500;


    ::placeholder{
        font-size: 1.1rem;
        color: ${props => props.className.includes("active") ? `${colors.secondary.red}` : colors.neutral.gray};
    }

    @media screen and (max-width: 768px) {
        width: 100%;


}
`
export const Submit = styled(Button)`
    border-radius: 5px;
    cursor: pointer;
    width: 15%;
    font-size: 1.1rem;
    word-wrap: none;
    margin-right: 2rem;
    &:hover {
        background: ${props => props.primary ? "#53f1f1" : null} ;
    }

    @media screen and ( max-width: 1100px) {
        width: 20%;

    }
    @media screen and ( max-width: 800px) {
        width: 30%;

    }
    @media screen and (max-width: 768px) {
        width: 100%;   
        margin-right: 0;
    }
`

export const AlertContainer = styled.p`
    height: 15px;
    margin-bottom: -10px;
`
export const Alert = styled.p`
    color: ${colors.secondary.red};
    font-size: 13px;
`
export const StatsHeadingText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    margin-bottom: 40px;

    @media screen and ( max-width: 768px) {
        width: 100%;

    }
`
export const Text = styled.p`
    font-size: ${(props) => props.h2 ? '2.2rem' : '18px'} ;
    font-weight: ${(props) => props.h2 ? '700' : '500'};
    color: ${(props) => props.h2 ? colors.neutral.veryDarkViolet : colors.neutral.grayishViolet};
    margin-bottom: ${(props) => props.h2 ? '20px' : null};
    line-height: ${(props) => props.p ? '1.6' : null};

    @media screen and ( max-width: 600px) {
        width: ${(props) => props.p ? '80%' : null} ;
    }
    
`

export const StatsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2rem 0;
    position: relative;
    padding-bottom: 60px;
    
    @media screen and ( min-width: 768px) {
        flex-direction: row; 
        justify-content: space-between;
        height: 100%;
        width: 100%;

    }
    @media screen and ( max-width: 600px) {
        padding-bottom: 0;
        margin: 0;

    }
    

`

export const Ribbon = styled.div`
    position: absolute;
    height: 8px;
    z-index: -1;
    width: 80%;
    top: 50%;
    border-radius: 10px;
    margin: 0 auto;
    background-color: ${colors.primary.cyan};

    @media screen and (max-width: 768px) {
        height: 80%;
        line-height: 80%;
        width: 8px;
        left: 50%;
        top:10%;
    }
`

export const UrlContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: -2rem;

`