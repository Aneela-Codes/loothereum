import React from "react";
import light from './../assets/images/light.png'
import tiktok from './../assets/images/tik-tok.svg'
import twitter from './../assets/images/twitter.svg'
import instagram from './../assets/images/instagram.svg'

const Navbar = () => {
  return (
    <header>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img src={light} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Marketplace</a>
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
        <li className="nav-item">
       <a className="nav-link" href="/"> 
       <img src={tiktok} alt="" />     
        </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <img src={twitter} alt="" />
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/">
          <img src={instagram} alt="" />

          </a>
        </li>
      </ul>
             </div>
  </div>
</nav>
      </div>
    </header>
  );
};

export default Navbar;
