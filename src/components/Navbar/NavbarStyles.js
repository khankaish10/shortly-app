import styled from 'styled-components'
import colors from '../../colors'

export const Navbar = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index:1000;
    background-color: #fff;
`
export const NavbarContainer = styled.div`
    max-width: 1300px;
    padding: 0 2rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.img`  
    height: 25px;
    @media screen and ( max-width: 768px) {
        height: 20px;
    }
    
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 2rem;
   

    @media screen and (max-width: 768px) {
        display: ${props => props.isOpen ? 'flex' : 'none' };
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 80px;
        left: 0;
        right: 0;
        padding: 2rem 0rem;  
        width: 90%;
        margin: 0 auto;
        border-radius: 10px;
        background-color: ${colors.primary.darkViolet};
        
    }
`
export const NavLinks = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        border-bottom: 1px solid ${colors.neutral.grayishViolet};
        margin-bottom: 1rem;
        width: 90%;

    }
`
export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    margin-right: 20px;
    font-size: 1rem;
    font-weight: 700;
    color: ${colors.neutral.grayishViolet};
    transition: all 200ms ease;
    
    &:hover {
        color: #232127;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        color: white;   
         
        &:hover {
        color: ${colors.neutral.gray} ;
    }
    }
`

export const NavButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 90%;
        
    }
`

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
    font-size: 1rem;

    &:hover {
        background: ${props => props.primary ? "#2acfcfad" : null} ;
    }

    @media screen and ( max-width: 768px){
        width: ${props => props.h4 ? '100%' : null};
        color: #fff ;
        &:hover {
        color: ${colors.neutral.gray} ;
    }

    }
`


export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  span {
    height: 2px;
    width: 1.8rem;
    background: ${colors.neutral.gray};
    border-radius: 5px;
    &:nth-child(2){
      margin: 4px 0;
    }
    
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;