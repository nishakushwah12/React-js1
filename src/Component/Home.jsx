import React from 'react'
import Header from './Header'
import Footer from './Footer'


function Home() {
  return (
    <>
    <Header/>

    <div className="container mt-5 text-center py-4">
        <h1 className="course_heading mt-5 text-uppercase pt-2">Hello nisha
        </h1>
        <h2 className="course_heading my-3 text-uppercase">Register Your Course</h2>
        <p className="course_para text-center mb-5 text-uppercase">Course Registration means the official recording of a student's name to
            study a course or courses.</p>
        <div className="row">

            <div className="col-md-4 mb-5 ">
                <div className="card card1  ">
                    <img className="card-img-top" height="200px" width="300px" src="/image/card_image1.jpg"
                        alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title ">B.Tech</h5>
                        <p className="card-text">B.Tech is a professional undergraduate engineering degree</p>

                        <a href="/course/btech" className="btn cors bg-info ">Register</a>

                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card card2 ">
                    <img className="card-img-top " height="200px!important" width="300px!important"
                        src="/image/card_image2.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title ">BCA</h5>
                        <p className="card-text">BCA is a three-year Bachelor's Degree in Computer Application </p>

                        <a href="/course/bca" className="btn cors bg-info">Register</a>

                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4 ">
                <div className="card card3 ">
                    <img className="card-img-top " height="200px" width="300px" src="/image/card_image3.jpg"
                        alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title ">MCA</h5>
                        <p className="card-text">MCA is a professional post-graduation degree in computer science</p>

                        <a href="/course/mca" className="btn cors bg-info">Register</a>

                    </div>
                </div>
            </div>

        </div>
    </div>

    
    <Footer/>

   
    </>
  )
}

export default Home
