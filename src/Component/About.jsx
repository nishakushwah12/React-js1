import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <>
    
    <Header/>
    <br></br>
<br></br>
<br></br>
<div className="container-fluid">
  <h1 className="text-center text-uppercase text-warning pt-5">About Us</h1>
  <div className="container">
    <img src="https://mits.ac.in/public/uploads/homepage/c33482e6737d42742a278876ea04ae03.jpg" className="A4 w-100"/>
  </div>
</div>

<div className="container mb-5 mt-5">
    
    <div className="row">
      
      <div className="col-md-6 mb-4  py-4">
        <div className="card card">
            <h3 className="text-warning">About Us</h3>

           <p> Madhav Institute of Technology & Science (MITS), Gwalior was established in 1957 by His Highness Sir Jiwaji Rao Scindia, Maharaja, of the erstwhile state of Gwalior under open door policy of Govt. of India. The foundation stone of the institute was laid by the then President Dr. Rajendra Prasad, on 20th October, 1956 and the building was inaugurated by President Dr. S.  Radhakrishnan on 11th December, 1964. On the occasion of Golden Jubilee Celebrations of the institute, the president of India, Dr. Pratibha Devi Singh Patil graced the Golden Jubilee 
            Celebrations of the institute as Chief Guest on 30th June, 2008. A postal stamp on MITS was also released on this occasion.

The institute is completing 60 years in 2017 and is celebrating Diamond Jubilee. To commemorate this momentous
 occasion, a large number of academic events and sports/ literary and other activities will continue 
 for one year.</p>
            





        
        </div>
      </div>
      {/* <!--mca card--> */}
      <div className="col-md-6 mb-1">
        <div className="card card">
                       

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://mits.ac.in/public/uploads/homepage/c33482e6737d42742a278876ea04ae03.jpg" className=" A5 d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://mits.ac.in/public/uploads/homepage/1.jpg" className="d-block A5 w-100 " alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://mits.ac.in/public/uploads/homepage/b78a8d1fef4bb249a0defa34237ef8b7.jpg" className=" A5 d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              
            


        </div>
      </div>

    </div>
  </div>

  <div className="container">
    <video></video>
  </div>




<Footer/>
    </>
  )
}

export default About