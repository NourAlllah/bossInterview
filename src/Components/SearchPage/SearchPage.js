import React from "react";
import { MDBCol } from "mdbreact";
import { MDBBtn } from 'mdb-react-ui-kit';
import './SearchPage.css';

const SearchPage = () => {
  return (
  <header>
   <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://i.ibb.co/YyjP55T/198313736-2902650380010203-7073704255042241380-n.jpg')", height: 650 }} >
 
   <div className='text-white'>
   <h2 className='text'> Follow your passion. Its your dream job, Boss!  </h2>
   </div>
  
   <MDBCol md="4">
      <input className="form-control" type="text" placeholder="Write your dream job..ex. Data Engineer" aria-label="Search" />
   </MDBCol>
   <MDBBtn pill color= ' rgba(42, 26, 94, 0.8) ' type="submit" className='btnn-5' >  Enter </MDBBtn> 

    </div>

  </header>
  
  );
}

export default SearchPage;