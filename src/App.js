import React  from 'react'; 
import './App.css';
import "./Components/fonawesome";
import { BrowserRouter as Router,  Redirect,  Route ,Switch} from 'react-router-dom';



/* PAGES */
import Profile from './Components/Profile/Profile';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import HowDoesItWork from './Pages/Howdoesitworks';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import SubcribeYourMail from './Pages/Subscribemail';
import  FooterContainer  from './Components/Containers/footer'; 
import Faqs from './Pages/Faqs';
import NotFound from './Components/NotFound';
import signUpIn from './Components/signUpIn';




function App (){
  
return (
<>

<Router>
    
     <Navbar/>

  
     
        <Switch>
            <Route  path='/'  exact component={Home} />
            <Route path='/how'  component={ HowDoesItWork} />
            <Route path='/about'   component={AboutUs} />
            <Route path='/contact'  component={ContactUs} />
            <Route path='/subscribe'   component={SubcribeYourMail} />
            <Route path='/faqs' component={Faqs}/>
            <Route path='/404' component={NotFound}/>
            <Route path='/signupin' component={signUpIn}/>
            <Route path='/profile' component= {Profile}/>
            <Redirect to='/404'/>
         </Switch>

        <br/>
    <br/>  <br/>
    <br/>  <br/>
    <br/>  <br/>
    <br/>  <br/>
    <br/>      
    <FooterContainer/>  

          
    <br/>
    <br/>      
    </Router>
    
    
</>
);
}
export default App;
 
/*
import { AccountBox } from './Components/accountBox/index';
import  styled from 'styled-components';
import NotFound from './Components/NotFound';
import { AccountContext } from './Components/accountBox/accountContext';
import Home from './Pages/Home';
import { SignupForm } from './Components/accountBox/signupForm';

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

  