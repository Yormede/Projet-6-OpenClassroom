import React from 'react'
import './_footer.scss'
import logo from '../../images/LOGO_WHITE.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo de Kasa" />
        <span className="footerLegal">© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
