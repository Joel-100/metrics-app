/* eslint-disable react/prop-types */
import React from 'react';
import DataPage from '../pages/DataPage';

const CountryList = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-wrap">
      {data.map((countryData, i) => (
        <DataPage
          key={countryData.id}
          index={i}
          id={countryData.id}
          image={countryData.image}
          population={countryData.population}
          name={countryData.name}
          languages={countryData.languages}
          capital={countryData.capital}
          timezone={countryData.timezone}
          subregion={countryData.subregion}
        />
      ))}
    </div>
  );
};

export default CountryList;
