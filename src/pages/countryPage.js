import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../store/action';
import Nav from '../components/Nav';

const CountryPage = () => {
  const country = useSelector((state) => state.country, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const { id } = useParams();
  const index = country.findIndex((item) => item.id === +id);

  return (
    <>
      <Nav>Country</Nav>
      <div>
        <div className="flex p-5 items-center">
          <img
            src={country[index].image}
            alt="Country flag"
            className="w-[8rem] h-[8rem] rounded-full ml-8"
          />
          <h3 className="text-2xl text-center text-white ml-10 font-mono font-bold">
            {country[index].name}
          </h3>
        </div>

        <div className="text-white bg-[#CE4176]">
          <p className="ml-10">Country Information</p>
        </div>

        <div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Capital:</p>
            <p>{country[index].capital}</p>
          </div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Population:</p>
            <p>{country[index].population}</p>
          </div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Timezone:</p>
            <p>{country[index].timezone}</p>
          </div>
          <div className=" py-10 px-10 bg-[#CE4176] text-white flex justify-between items-center">
            <p className="text-2xl font-semibold font-mono">Subregion</p>
            <p>{country[index].subregion}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
