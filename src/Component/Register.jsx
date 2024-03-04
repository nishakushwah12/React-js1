import React from 'react'
import {Link} from'react-router-dom'

function Register() {
  return (
    <>

      <h1> Register</h1>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card border-radius:1rem;">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" className="img-fluid border-radius: 1rem 0 0 1rem;" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 text-black">
                    <div className="d-flex align-items-center pb-1">
                      <img src="image/logo.png" className="logo" />
                    </div>
                    <h5 className="text-center mb-3 pb-3 regs_heading">Register here</h5>
                    <form action="dashbord.html" method="post" enctype="multipart/form-data">
                      <div className="form-group">
                        <input type="text" placeholder="Name" name="name" className="form-control mt-3" required="" fdprocessedid="vlh7crd" />
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Email" name="email" className="form-control mt-3" required="" fdprocessedid="0sbku8" />
                      </div>

                      <div className="form-group">
                        <input type="password" placeholder="Password" id="myInput1" name="password" className="form-control mt-3" required="" fdprocessedid="gqb82s" aria-autocomplete="list" />
                      </div>
                      <div className="form-group">
                        <input type="password" placeholder=" confirm Password" id="myInput1" name="password" className="form-control mt-3" required="" fdprocessedid="gqb82s" aria-autocomplete="list" />
                      </div>
                      <input type="checkbox" onclick="myFunction()" />
                      <span>&nbsp;Show Password</span>
                      <div className="form-group my-2">
                        <label className="form-label">Profile Picture</label>
                        <input type="file" name="profile_image" className="form-control" required="" />
                      </div>
                      <div className="form-group text-center">
                        <button type="submit" className="btn btn-info mt-3 form-control mb-3 background: #12587a; color: #ffff" fdprocessedid="6rrnvb">
                          Register</button>
                        <span className=" text-center pt-3">HAVE AN ACCOUNT?
                          <Link className="color: #393f81;" to="/">LOGIN NOW</Link>
                        </span>
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

export default Register