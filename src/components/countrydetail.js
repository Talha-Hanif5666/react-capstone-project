import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../redux/countrySlice/countrySlice';
import Navbar from './navbar';
import './components.css';

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCountry(params.countryId));
  }, [dispatch, params.countryId]);

  return (
    <div>
      <Navbar data="Country Details" />
      <main>
        <div>
          {countryData.loading && <h1>Loading...</h1>}
          {!countryData.loading && countryData.error ? (
            <div>
              Error:
              {countryData.error}
            </div>
          ) : null}
          {!countryData.loading && countryData.country.length ? (
            <div id="detailscolor">
              <div id="detailsFlag">
                <img className="HomeFlag" src={countryData.country[0].flag.svg} alt="Country flag" />
              </div>
              <div>
                <div className="detailContainer">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{countryData.country[0].countryName}</td>
                      </tr>
                      <tr>
                        <td>Currency:</td>
                        <td>{countryData.country[0].currencies[0].name}</td>
                      </tr>
                      <tr>
                        <td>Capital:</td>
                        <td>{countryData.country[0].capital}</td>
                      </tr>
                      <tr>
                        <td>Area:</td>
                        <td>{countryData.country[0].area}</td>
                      </tr>
                      <tr>
                        <td>Population:</td>
                        <td>{countryData.country[0].population}</td>
                      </tr>
                      <tr>
                        <td>Timezones:</td>
                        <td>{countryData.country[0].timezones[0]}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default Details;
