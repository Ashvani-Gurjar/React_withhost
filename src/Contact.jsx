import React, { useState } from 'react';
import './App.css';

const Contact = () => {
 
      const [userData,setuserData] = useState({
          firstName : "",
          lastName : "",
          phone : "",
          email : "",
          address : "",
          message:"",
      });

      let name,value;
      const postUserData = (event) =>{
         name = event.target.name;
         value = event.target.value;

         setuserData({...userData,[name]: value});
      };

      const SubmitData = async(e) =>{
          e.preventDefault();
          const { firstName,lastName,phone,email,address,message } = userData;
          if(firstName && lastName && phone && email && address && message){
          const res =  fetch('https://userdata-faf16-default-rtdb.firebaseio.com/UserDataRecords.json',
          { 
          method : "POST",
          Headers:{
               'Content-Type': 'application/json',
          },
          body : JSON.stringify({
               firstName,
               lastName,
               phone,
               email,
               address,
               message,
          }),
     }    
          );
 if(res){
     alert("Data Stored");
}
else{
     alert("Data not Stored")
}
setuserData({
          firstName : "",
          lastName : "",
          phone : "",
          email : "",
          address : "",
          message:"",
})
      }
      else{
          alert("Please Fill All Details")
      }
}
     return (
          <section className='contactus-section'>
               <div className='container'>
                    <div className='row'>
                         <div className='col-12 col-lg-10 mx-auto'>
                              <div className='row'>
                                   <div className='contact-leftside col-12 col-lg-5 '>
                                        <h1 className='main-heading fw-bold'>Connect With Our <br /> Sales Team</h1>
                                        <p className='main-hero-para'>
                                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam a fugiat dicta! Voluptatum commodi quaerat eum error perspiciatis dolorum, blanditiis magni vel dolor. Sit, voluptatibus aut officia perferendis vitae esse.

                                        </p>
                                        <figure>
                                             <img src="./images/hero1.jpg" alt="aboutus" className='img-fluid' />
                                        </figure>

                                   </div>
                                   

                                   
                                        <div className='contact-rightside col-12 col-lg-7'>

                                             <form method='POST'>
                                                  <div className='row'>
                                                       <div className='col-12 col-lg-6 contact-input-feild'>
                                                            <input className='form-control' type="text" placeholder='Enter your name' 
                                                                 onChange={postUserData}
                                                                 value = {userData.firstName}
                                                                 name = "firstName"
                                                            />

                                                       </div>
                                                       <div className='col-12 col-lg-6 contact-input-feild'>
                                                            <input className='form-control' type="text" placeholder='Enter your last name' 
                                                                 onChange={postUserData}
                                                                 value = {userData.lastName}
                                                                 name = "lastName"
                                                            />

                                                       </div>
                                                  </div>
                                                  <div className='row'>
                                                       <div className='col-12 col-lg-6 contact-input-feild'>
                                                            <input className='form-control' type="text" placeholder='Enter your email' 
                                                                 onChange={postUserData}
                                                                 value = {userData.email}
                                                                 name = "email"
                                                            />

                                                       </div>
                                                       <div className='col-12 col-lg-6 contact-input-feild'>
                                                            <input className='form-control' type="text" placeholder='Enter your Phoneno' 
                                                                 onChange={postUserData}
                                                                 value = {userData.phone}
                                                                 name = "phone"
                                                            />

                                                       </div>
                                                     
                                                            <div className='row'>
                                                                 <div className='col-12 contact-input-feild'>
                                                                      <input className='form-control' type="text" placeholder='Add Address'
                                                                      onChange={postUserData}
                                                                      value = {userData.address}
                                                                      name = "address" />
                                                                 </div>
                                                            </div>
                                                            <div className='row'>
                                                                 <div className='col-12 contact-input-feild'>
                                                                      <input className='form-control' type="text" placeholder='Enter your messages'
                                                                      onChange={postUserData}
                                                                      value = {userData.message}
                                                                      name = "message" />
                                                                 </div>
                                                            </div>

                                                            <div class="form-check form-checkbox-style">
                                                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                                      <label class="form-check-label" className='main-hero-para'>
                                                                          I agree that the ashvanisinghgurjar may contact me at the email address or phone number above
                                                                      </label>
                                                                      <div>
                                                                           <button type='submit' className='btn btn-style w-100 mt-5 ' onClick={SubmitData}>Submit</button>
                                                                      </div>
                                                            </div>
                                                       </div>

                                               


                                             </form>
                                      
                                 

                              </div>
                         </div>
                    </div>
                    </div>
                                   </div>
               
          </section>
     )
}

export default Contact