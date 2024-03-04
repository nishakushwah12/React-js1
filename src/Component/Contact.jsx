import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
  return (
    <>
<Header/>
<br></br>
<br>
</br>
<div className="container-fluid">
        <h1 className="text-center text-uppercase text-warning py-3 mt-5">Contact us</h1>
        <div className="container mt-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9316475337423!2d78.2053419!3d26.231410399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c14c64938e5f%3A0x87b3d6a725f7b077!2sMadhav%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1654168110291!5m2!1sen!2sin"
                width="100%" height="500px">

            </iframe>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default Contact