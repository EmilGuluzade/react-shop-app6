import React from 'react'
 import "./Header.css"
 import { Link } from 'react-router-dom'
const Header = () => {
return (
  <header class="d-flex">
    <div className="logo">
      <img
        src="	https://preview.colorlib.com/theme/course/images/logo.png"
        alt=""
      />
      <span>COURSE</span>
    </div>
    <nav class="main_nav_container">
      <div class="main_nav">
        <ul class="main_nav_list d-flex  ">
          <li class="main_nav_item">
            <Link to="/">Home</Link>
          </li>
          <li class="main_nav_item">
            <Link to="/basket">Basket</Link>
          </li>
          <li class="main_nav_item">
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header_side d-flex flex-row justify-content-center align-items-center">
      <img
        src="https://preview.colorlib.com/theme/course/images/phone-call.svg "
        alt=""
      />
      <span>+43 4566 7788 2457</span>
    </div>
  </header>
);
}

export default Header