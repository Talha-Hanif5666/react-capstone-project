/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import { AiOutlineSetting } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './components.css';

const Navbar = ({ year }) => (
  <header id="head">
    <Link id="back" to="/">
      <FaArrowLeft />
      {year}
    </Link>
    <h2>Countries</h2>
    <div id="settings">
      <CiMicrophoneOn />
      <AiOutlineSetting />
    </div>
  </header>
);

Navbar.propTypes = {
  year: PropTypes.number,
};

Navbar.defaultProps = {
  year: null,
};

export default Navbar;
