/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './components.css';

const Country = ({ name, population, flag }) => (
  <div className="borders">
    <Link className="countryLink" to={name}>
      <div className="homeFlag">
        <img alt="Flag" src={flag} className="flagSize" />
        <BsArrowRightSquare />
      </div>
      <div className="countryName">
        <p>{name}</p>
        <div className="countryPopulation">
          Population
          <span className="colon">:</span>
          <p>{population}</p>
        </div>
      </div>
    </Link>
  </div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
