import React from 'react'

function Footer() {
  return (
    <>
    

    {/* <!-- Footer Section start --> */}
    <div className="container-fluid p-0 footer pt-4 bg-info mt-4">
        <footer className="text-white text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!--Grid row--> */}
                <div className="row mt-4">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 block_title"><span>ABOUT US</span></h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                        <div className="mt-4">

                            <a type="button" className="btn btn-floating  btn-lg background: #35b9dd; color:white;"
                                href="https://www.facebook.com/harshit.sahu.5648/"><i className="fab fa-facebook-f"></i></a>
                            {/* <!-- Facebook --> */}
                            <a type="button" className="btn btn-floating  btn-lg background: #35b9dd; color:white;"><i className="fa-brands fa-instagram"></i></a>
                            {/* <!-- Instagram --> */}
                            <a type="button" className="btn btn-floating  btn-lg background: #35b9dd; color:white;"
                                href="https://twitter.com/Harshit64946181"><i className="fab fa-twitter"></i></a>
                            {/* <!-- Twitter --> */}
                            <a type="button" className="btn btn-floating  btn-lg background: #35b9dd; color:white;"
                                href="https://www.linkedin.com/in/himanshu-sahu-b9463a17a/"><i
                                    className="fa-brands fa-linkedin"></i></a>
                            {/* <!-- Linkedin --> */}
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase mb-4 pb-1 block_title"><span>CONTACT</span></h5>

                        <ul className="fa-ul margin-left: 1.65em;">
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Gole ka mandir,
                                    Station
                                    road</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-envelope"></i></span><span
                                    className="ms-2">admissionmits@gmail.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+91 8871482503
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+91
                                    8871482503</span>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase mb-4 block_title"><span>Opening hours</span></h5>

                        <table className="table text-center text-white">
                            <tbody className="font-weight-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

        </footer>

    </div>
    {/* <!-- Container-fluid end -->     */}
    </>
  )
}

export default Footer