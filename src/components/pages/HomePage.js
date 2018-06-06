import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    { isAuthenticated ? <button onclick ={() => logout() }>Logout</button> : <Link to='/login'>Login</Link>}
    <Link to="/login">Login</Link>
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(mapstateToProps, { logout: actions.logout })(HomePage);