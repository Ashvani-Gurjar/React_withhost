import React from 'react';
import './App.css';

const Header = () => {
     return (
          <>
               <header>
                    <section className='container main-hero-container'>
                         <div className='row'>
                              <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start
                               order-lg-first order-last'>

                                   <h1 className='display-2'>
                                        Online Payment Made <br /> Easy For You.
                                   </h1>
                                   <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id eveniet quasi blanditiis quisquam obcaecati, sit porro eaque pariatur, incidunt cumque ab nulla quia ipsa? Quam nulla dignissimos nisi commodi?
                                   </p>
                                   <h3>Get early access for you</h3>

                                   <div className='input-group mt-3'>
                                        <input type="text" className='rounded-pill w-73 w-lg-75 me-3 p-2 form-control-text' placeholder='Enter Your Email' />
                                        <div className='input-group-button'>
                                             Get it Now
                                        </div>
                                   </div>
                              </div>
                              <div className='col-12 col-lg-6 order-md-first order-sm-first  header-right-side d-flex justify-content-center align-items-center main-herosection-images'>
                                   <img src="./images/hero1.jpg" alt="images1" className='img-fluid' />
                                   <img src="./images/hero4.jpg" alt="images4" className='img-fluid main-hero-img2' />

                              </div>


                         </div>

                    </section>
               </header>
          </>
     )
}

export default Header