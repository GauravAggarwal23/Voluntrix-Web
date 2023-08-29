import React from 'react'
import { logo } from './constants'
import { Link } from 'react-router-dom'
const Header = () => {
    const HeaderStyle = {
        color: "#8F43EE",
        backgroundColor: "#212A3E",
        height: "15%",        
    }
    const Headingstyle={
        margin : "auto 1%",
        color : "white",
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"style={HeaderStyle}>
      
    <div className="container-fluid"  >
    <img src={logo} alt="Bootstrap" width="40" height="40"/>
      <Link className="navbar-brand" href="#" style={Headingstyle} to="/">Voluntrix</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#" style={Headingstyle} to="/about">About</Link>
          </li>
          </ul>
      </div>
    </div>
  </nav>

  )
}

export default Header
