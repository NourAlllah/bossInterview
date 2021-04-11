import  React ,{useState } from 'react';
import './Navbar.css';
import { MenueItems } from './MenueItems';
import {Link} from 'react-router-dom';
import { SideBarData } from './../SideBarData';








   
    function Navbar () { 
        const [sidebar , setSidebar] = useState(false);
       

        const showSidebar = () => setSidebar (!sidebar);
        
        
        return (   
            <> 
            
            
            <div className='navbar'>
                    <Link  to='/' className='menu-icon' >
                        <i class="fas fa-bars" onClick={showSidebar} ></i>
                    </Link> 

                    <img className='navbar-logo' src='..\logo.png' alt ='..\logo192.png'/>
                  
                            
                                <ul className='navbar-but'>
                                {MenueItems.map ( (item,index)=> {
                                    return(
                                        <li key={index}> 
                                            <Link  to='' className={item.cName}  path={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ); 
                                    }
                                )}
                                </ul>
                            
                    <div className ='nav-shadow'></div>
             </div>
            <nav className={sidebar?'nav-menu active' : 'nav-menu'} >  
                
                <ul className='navbar-items' onClick={showSidebar} >
                    <li className ='navbar-toggle'>
                        <Link to='/' className='menu-icon '>
                            <i class="fas fa-times"></i>
                         </Link>
                    </li>
                     {SideBarData.map( (item,index) => {
                         return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  {item.icon}
                                  <span>
                                    {item.title}
                                  </span>
                              </Link>
                          </li> );
                     })}
                     

                </ul>
                
                
            </nav>
           
         </>   

         );
    }

export default Navbar;
   /* <div className ='nav-shadow'></div>*/