import React from 'react';
import logo from '../images/user.svg';
import '../navbar.css';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-parent">
        <nav className="navbar">
          <ul>
            <li className="heading">Bookstore CMS</li>
            <li><span className="link">Books</span></li>
            <li><span className="link">Categories</span></li>
            <li className="image"><img src={logo} alt="" /></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
