
import NavBar from './components/Navbar'
import styled from 'styled-components'
import Hero from './components/HeroSection'
import MainSection from './components/MainSection'
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer'
import GlobalStyle from './globalStyle'

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  
`

function App() {
  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <NavBar />
      <Hero />
      <MainSection />
      <GettingStarted />
      <Footer />
    </Wrapper>
    </>
  );
}

export default App;
