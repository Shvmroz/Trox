import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    setIsNavCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleSignupNavigate = () => {
    setIsNavCollapsed(true);
    navigate('/tryitfree');
  };

  const handleSignin = () => {
    navigate('/signin');
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-white shadow-sm align-items-center">
        <div className="container-fluid">
          {/* =================== LOGO ==================== */}
          <div className="trox-logo d-flex justify-content-between align-items-center">
            <Link to='/'>
              <h2>TROX PI</h2>
            </Link>
          </div>

          {/* =================== TOGGLE BUTTON ===================== */}
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* =================== ITEMS LIST ===================== */}
          <div className={`collapse navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to='/tradingbots'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Trading Bots
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/plan'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Plans
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/features'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/developers'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Developers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/pricecharts'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Price Charts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/company'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Company
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to='/academy'
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                  onClick={handleNavLinkClick}
                >
                  Academy
                </NavLink>
              </li>
            </ul>
            {/* =================== BUTTONS ===================== */}
            <div className="d-flex justify-content-between">
              <div className='Sign-in-text d-flex align-items-center'>
                <li onClick={handleSignin}>Sign In</li>
              </div>
              <Button onClick={handleSignupNavigate} className='purple-btn' variant="contained">Try It Free</Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
