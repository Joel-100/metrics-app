import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../store/action';
import Nav from '../components/Nav';
import CountryList from '../components/CountryList';

let retrieveOnce = true;
const Home = () => {
  const country = useSelector((state) => state.country, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (retrieveOnce) {
      dispatch(fetchCountry());
      retrieveOnce = false;
    }
  }, [dispatch]);

  return (
    <div>
      <Nav>Continent</Nav>
      <div className="flex p-5 bg-[#FC5193] items-center">
        <img src={euImg} alt="Europe map" className="w-[60%] opacity-60" />
        <div className="ml-6">
          <h3 className="text-3xl font-mono text-white font-bold">Europe</h3>
          <p className="text-xl text-white">746.4 million</p>
        </div>
      </div>
      <div className="text-white bg-[#DF4782]">
        <h3 className="ml-8">Stats by Country</h3>
      </div>
      <CountryList data={country} />
    </div>
  );
};

export default Home;
