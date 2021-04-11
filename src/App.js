import React  from 'react'; 
import './App.css';
import "./Components/fonawesome";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import HowDoesItWork from './Pages/Howdoesitworks';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import SubcribeYourMail from './Pages/Subscribemail';
import { FooterContainer } from './Components/Containers/footer';    
import HomeSec1 from './Components/HomeSec1';
import  styled from 'styled-components';
import { AccountBox } from './Components/accountBox/index';


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App (){
return (
<>
    <Router>
       <Navbar/>
       <Switch>
            <Route path='./home' exact component={Home} />
            <Route path='/how'  component={ HowDoesItWork} />
            <Route path='/about'   component={AboutUs} />
            <Route path='/contact'  component={ContactUs} />
            <Route path='/subscribe'   component={SubcribeYourMail} />
          </Switch>
          <br/>
          <br/>

          <AppContainer>
             <AccountBox />
           </AppContainer>
       <HomeSec1/>
           
           
            
            
       <FooterContainer/>
           
    </Router>
    
</>
);
}
export default App;
 
/*

          <AppContainer>
             <AccountBox />
           </AppContainer>
 const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
*/
/*export const useBreakpoints = () => {
    const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
    const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
    const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });
  
    const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
    const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
    const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });
  
    const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
    const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });
  
    const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' });
    const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' });
  
    return {
      isMobileSmall,
      isMobileMid,
      isMobileFloor,
      isTabletFloor,
      isTabletMid,
      isTabletCeil,
      isLaptopFloor,
      isLaptopCeil,
      isXHDFloor,
      isXHDCeil,
    };
  }; */
  