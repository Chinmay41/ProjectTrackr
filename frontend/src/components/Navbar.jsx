import React from 'react';


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
      <nav>
        <ul>
          <li><h2 className='ionots'>Ionots</h2></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
