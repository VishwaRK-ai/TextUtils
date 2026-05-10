import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const location = useLocation();
  const isDarkOrColor = props.mode !== 'light';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${isDarkOrColor ? 'dark' : 'light'} ${isDarkOrColor ? 'glass-panel' : 'bg-white'}`} style={{ zIndex: 100 }}>
      <div className="container-fluid">
        <Link className={`navbar-brand fw-bold ${!isDarkOrColor ? 'text-gradient' : 'text-white'}`} to="/">
          <span style={{ fontSize: '1.5rem' }}>{props.title}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active fw-bold' : ''}`} to="/about">About</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 me-4">
            <span className={`small fw-medium me-1 ${isDarkOrColor ? 'text-light' : 'text-muted'}`}>Themes:</span>
            <button className="color-btn" style={{ backgroundColor: '#0d6efd' }} onClick={() => props.toggleMode('primary')} aria-label="Primary theme" />
            <button className="color-btn" style={{ backgroundColor: '#dc3545' }} onClick={() => props.toggleMode('danger')} aria-label="Danger theme" />
            <button className="color-btn" style={{ backgroundColor: '#198754' }} onClick={() => props.toggleMode('success')} aria-label="Success theme" />
            <button className="color-btn" style={{ backgroundColor: '#ffc107' }} onClick={() => props.toggleMode('warning')} aria-label="Warning theme" />
          </div>

          <div className={`form-check form-switch ${isDarkOrColor ? 'text-light' : 'text-dark'} d-flex align-items-center`}>
            <input 
              className="form-check-input me-2 mt-0" 
              onChange={() => props.toggleMode(props.mode === 'light' ? 'dark' : 'light')} 
              checked={props.mode === 'dark'}
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              style={{ cursor: 'pointer', width: '40px', height: '20px' }}
            />
            <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault" style={{ cursor: 'pointer' }}>
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};