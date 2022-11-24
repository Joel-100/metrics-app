import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../store/action';
import Nav from '../components/Nav';
import CountryList from '../components/CountryList';
import africaImg from '../assets/africa.png';

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
      <Nav className>Continent</Nav>
      <div className="flex p-5 items-center border-b">
        <img src={africaImg} alt="Africa map" className="w-[60%] opacity-60" />
        <div className="ml-6">
          <h3 className="text-3xl font-mono text-white font-bold">Africa</h3>
          <p className="text-xl text-white">1,393.7 billion</p>
        </div>
      </div>
      <div className="text-white my-4">
        <h3 className="ml-8">Stats by Country</h3>
      </div>
      <CountryList data={country} />
    </div>
  );
};

export default Home;
