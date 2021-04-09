import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Manager User</a>
        <Link to="/users/add" className="btn btn-success">
          <i className="fas fa-user-plus mr-2"></i>
          Create User
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
