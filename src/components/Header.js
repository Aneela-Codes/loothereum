import React from 'react'
import light from './../assets/images/light.png'
import tiktok from './../assets/images/tik-tok.svg'
import twitter from './../assets/images/twitter.svg'
import instagram from './../assets/images/instagram.svg'
// import dark from './../assets/images/dark.png'
const Header = () => {
  
    return (
        <header >
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
     <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img src={light} alt="logo" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">marketplace</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">whitepaper</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">rewards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">timeline</a>
        </li>
    
        
      </ul>
    </div>
  </div>
    </nav>
          </div>
        </header>

        
    )
}

export default Header
