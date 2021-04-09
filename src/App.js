import React  from 'react'; 
import './App.css';
import styled from "styled-components";
import { AccountBox } from './Components/accountBox';
import "./Components/fonawesome";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import HowDoesItWork from './Pages/Howdoesitworks';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import SubcribeYourMail from './Pages/Subscribemail';

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

    <Router>
        <Navbar/>
        <Switch>
           <Route path='/homes' exact component={Home} />
           <Route path='/how'  component={ HowDoesItWork} />
           <Route path='/about'   component={AboutUs} />
           <Route path='/contact'  component={ContactUs} />
           <Route path='/subscribe'   component={SubcribeYourMail} />
        </Switch>

        <AppContainer>
            <AccountBox />
        </AppContainer>

    </Router>   
);
}
export default App;
 
