import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>


      <nav className="navbar navbar-expand-md header fixed-top ps-4 pt-1 p-0">
        <div className="container-fluid p-0">
          <Link to="" className="navbar-brand">
            {/* <!--Desktop logo--> */}
            <Link to="/dashboard">
              <img src="/image/logo.png" width="120px" className="desk_logo" />
            </Link>
            {/* <!--Mobile logo--> */}
            <Link to="/dashboard">
              <img src="/image/1.jpg" className="moblogo" width="120px" />
            </Link>
          </Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#pn">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="pn">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li><Link to="/home" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              <li><Link to="/logout" className="nav-link">Logout</Link></li>
              <li><Link to="#" className="nav-link user" data-bs-toggle="modal" data-bs-target="#aa">nisha</Link></li>
            </ul>
            <img src="https://res.cloudinary.com/dqowaxfln/image/upload/v1689787934/Profile_pictures/jdyaj0kgcwxanbzsdddc.jpg"
              width="10%" height="80px" alt="...." className="me-3" />
          </div>

        </div>
        {/* <!--container-fluid end --> */}
      </nav>
      {/* <!-- Navbar end -->   */}
    </>
  )
}

export default Header