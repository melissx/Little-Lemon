import React from 'react';
import bannerImg from "./Images/restaurantfood.jpg";

const Header = () => {
  return (
    <header className='header'>
      <div className="headerContainer">
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with an modern twist</p>
        </div>
        <button aria-label='On Click'><a href="Booking">Reserve a Table</a></button>
      </div>
      <div className="bannerImg">
        <img src={bannerImg} alt="banner image" />
      </div>
    </header>
  )
}

export default Header;