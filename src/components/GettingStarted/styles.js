import styled from 'styled-components'
import colors from '../../colors'
import bgBoostDesktop from '../../images/bg-boost-desktop.svg'
import bgBoostMobile from '../../images/bg-boost-mobile.svg'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.neutral.veryDarkViolet};
    background-image: url(${bgBoostDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 200px;

    @media screen and ( max-width: 768px) {
        background-image: url(${bgBoostMobile});
        height: 250px;
    }   
`
export const Text = styled.h2`
    font-size: 2.2rem ;
    font-weight: 700;
    color:   #fff;
    margin-bottom: 20px;

    
    @media screen and ( max-width: 768px) {
        font-size: 1.4rem;
    }
`
