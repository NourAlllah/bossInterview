import React  from 'react'; 
import './App.css';
import "./Components/fonawesome";
import { BrowserRouter as Router,  Redirect,  Route ,Switch} from 'react-router-dom';



/* PAGES */
import Profile from './Components/Profile/Profile';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import RateUs from './Components/RateUs/RateUs';
import BookInterview from './Components/BookInterview/BookInterview';
import HowDoesItWork from './Pages/Howdoesitworks';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import SubcribeYourMail from './Pages/Subscribemail';
import  FooterContainer  from './Components/Containers/footer'; 
import Faqs from './Pages/Faqs';
import NotFound from './Components/NotFound';
import signUpIn from './Components/signUpIn';
import RateRun from './Components/RateUs2/RateRun';
import afterLogin from './Components/afterLoginHome/afterLogin';
import SearchPage from './Components/SearchPage/SearchPage';




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
            <Route path='/rate' component= {RateUs}/>
            <Route path='/book' component= {BookInterview}/>
            <Route path='/pop' component= {RateRun}/>
            <Route path='/login' component= {afterLogin}/>
            <Route path='/searchpage' component= {SearchPage}/>
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
import Search from './Components/search';
import Search from './Components/Search';
import jobSearch from './Components/jobSearch/jobSearch';
import searchBar from './Components/searchBar';

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

  