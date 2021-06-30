import React from 'react';
import './App.css';
import "./Components/fonawesome";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import EmployeeFinal from './Pages/Employees/EmployeeFinal';
import FooterContainer from './Components/Containers/footer';

import Navbar from './Components/Navbar/Navbar';

/* PAGES */
<<<<<<< HEAD

import Home from './Components/Home';

=======
import Profile from './Components/profile/Profile';
import Home from './Components/Home';
>>>>>>> f5471e435bb232a3a2f9ef50f130288dd4e3f263
import RateUs from './Components/RateUs/RateUs';
import BookInterview from './Components/BookInterview/BookInterview';
import HowDoesItWork from './Pages/Howdoesitworks';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import SubcribeYourMail from './Pages/Subscribemail';
<<<<<<< HEAD
import Profile from './Pages/Employees/Profile';
=======
>>>>>>> f5471e435bb232a3a2f9ef50f130288dd4e3f263

import Questions from './Pages/Questions';
import NotFound from './Components/NotFound';
import signUpIn from './Components/signUpIn';
import InterviewPage from './Components/InterviewPage';

import RateRun from './Components/RateUs2/RateRun';
import afterLogin from './Components/afterLoginHome/afterLogin';
import SearchPage from './Components/SearchPage/SearchPage';
import Navbar from './Components/Navbar/Navbar';
import  FooterContainer  from './Components/Containers/footer';





function App() {

  return (
    <>

      <Router>


<<<<<<< HEAD

        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/how' component={HowDoesItWork} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/subscribe' component={SubcribeYourMail} />
          <Route path='/faqs' component={Questions} />
          <Route path='/404' component={NotFound} />
          <Route path='/signupin' component={signUpIn} />
          <Route path='/InterviewNow' component={InterviewPage} />
          <Route path='/editprofile' component={EmployeeFinal} />
          <Route path='/profile' component={Profile} />
          <Redirect to='/404' />
        </Switch>


        <FooterContainer />


        <br />
        <br />
      </Router>


    </>
  );
=======
<Router>
    
      
        <Navbar/>
        <Switch>
            <Route  path='/'  exact component={Home} />
            <Route path='/how'  component={ HowDoesItWork} />
            <Route path='/about'   component={AboutUs} />
            <Route path='/contact'  component={ContactUs} />
            <Route path='/subscribe'   component={SubcribeYourMail} />
            <Route path='/faqs' component={Questions}/>
            <Route path='/404' component={NotFound}/>
            <Route path='/signupin' component={signUpIn}/>
            <Route path='/InterviewNow' component={InterviewPage}/>
            <Redirect to='/404'/>
         </Switch>   
         <FooterContainer/>   
    </Router>
    
    
</>
);
>>>>>>> f5471e435bb232a3a2f9ef50f130288dd4e3f263
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