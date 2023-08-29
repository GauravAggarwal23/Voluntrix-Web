import React from 'react'
 

const Footer = () => {
    const insta ={
        color:"#d115c1",
       
        
    }
    const fb ={
        color:"#0f34eb",
        

    }
    const FooterStyle = {
        backgroundColor: "#9BA4B5",
        display: 'flex',  
         width:"100%",
        position:"fixed",
        bottom: '0',
        left: '0',

      }
  return (
    <footer className='bg-dark text-light '  style={FooterStyle}>  
    <p className='text-center'>Copyright &copy; Voluntrix.com</p>
    <i class="fa-brands fa-instagram" style={insta}></i>
    <i class="fa-brands fa-facebook" style={fb}></i>

  </footer>
  )
}

export default Footer
