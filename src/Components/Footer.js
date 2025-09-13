import React from 'react'

const Footer = () => {
 let  footerStyle = {
  position: "absolute",
  top: "100vh",
  width: "100%",
  // border: "2px solid red"
  }
  return (
    <footer className='bg-dark text-light py-3'style={footerStyle}>
      <p className='text-center'>
        copyright &copy; MyTodosList.com
      </p>
      
    </footer>
  )
}

export default Footer
