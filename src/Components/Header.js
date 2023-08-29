import React from 'react'
import { logo } from './logo'
 
const Header = () => {
    const HeaderStyle = {
        color: "#8F43EE",
        backgroundColor: "#212A3E",
        height:"10%", 
        fontWeight: "bold",
        fontSize: "1rem",     
    }
    const Headingstyle={
        margin : "auto 1%",
        color : "white",
        padding: '0.5%',
        marginLeft: "15px",
        
    }
    const buttonStyle ={
        marginLeft: "78%",
        height:"33px",
        position:'absolute',

    }
    const buttonStylechat ={
        marginLeft: "70%",
        height:"33px",
        position:'absolute',

    }
   

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"style={HeaderStyle}>
      
    <div className="container-fluid"  >
    <img src={logo} alt="Bootstrap" width="40" height="40"/>
      <h3 className="navbar-brand" href="#" style={Headingstyle} to="/">Voluntrix</h3>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <p className="nav-link active" aria-current="page" href="#" style={Headingstyle} to="/about">Home</p>
          </li>
          {/* <li className="nav-item">
            <p className="nav-link active" aria-current="page" href="#" style={Headingstyle} to="/about">About</p>
          </li>
          <li className="nav-item">
            <p className="nav-link active" aria-current="page" href="#" style={Headingstyle} to="/about">Features</p>
          </li> */}
          </ul>
          <button type="button" className="btn btn-outline-light" style={buttonStylechat} >Chat With Us</button>
          <button type="button" className="btn btn-outline-light" style={buttonStyle}>Logout</button>
      </div>
    </div>
  </nav>

  )
}

export default Header
