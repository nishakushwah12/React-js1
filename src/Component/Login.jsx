import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <>

            <section />
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card border-radius: 1rem;">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="image/images (1).jpg" className="logo1 " />
                                    {/* <!-- <img src="image/card_image2.jpg"> --> */}
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 text-black">

                                        <div className="d-flex align-items-center pb-1">
                                            {/* <!-- <img src="/image/logo.png" className="register_logo" width="120px" height="120px" alt="...."> --> */}
                                            <img src="image/logo.png" className="width=120px  logo" height="120px" alt="..." />
                                        </div>
                                        <h5 className="text-center regs_heading mb-3 pb-3">Login</h5>





                                        <form action="/user/login" method="post" className="pt-4" >
                                            <div className="form-group mb-4">
                                                <input type="text" name="email" className="form-control form-control-lg" placeholder="Email" />
                                            </div>
                                            <div className="form-group mb-5">
                                                <input type="password" name="password" className="form-control form-control-lg" placeholder="Password" />
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn btn-info btn-block background: #12587a; color:#ffff;">Log In</button>
                                                
                                                <br />
                                                <div className="mt-4">
                                                    <span className=" mb-5 pb-lg-2" >DON`T HAVE AN ACCOUNT?</span>
                                                    <Link to="/register" className="color: #393f81;">REGISTER NOW</Link>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login