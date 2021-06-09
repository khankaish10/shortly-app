import styled from 'styled-components'
import colors from '../../colors'

export const Wrapper = styled.div`
 background-color: ${colors.neutral.veryDarkViolet};

`
export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 3rem 2rem;
   
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  
  @media screen and ( max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
    text-align: center;
  }
`;



export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media screen and ( max-width: 768px) {
    width: 100%;
    
  }
`
export const Img = styled.img`
  height: 1.6rem;
  object-fit: contain;

  @media screen and ( max-width: 768px) {
    height: 2rem;
  }
`
export const Title = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 2.2rem;
  font-weight: 700;
 

  @media screen and ( max-width: 768px) {
    margin-bottom: 1.5rem;
    
  }
`;

export const Link = styled.a`
  color: ${colors.neutral.gray};
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.7rem;
  text-decoration: none;
  width: fit-content;
  &:hover {
      color: ${colors.primary.cyan};
  }
`;
export const IconContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;

@media screen and ( max-width: 768px) {
    justify-content: center;
    
  }
`
export const Icon = styled.img`
object-fit: contain;
cursor: pointer;

@media screen and ( max-width: 768px) {
    margin-right: 1.5rem;
    
  }


`

