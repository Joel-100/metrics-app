import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../assets/icons.svg';

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <div className="flex justify-between items-center bg-[#EC4C8A] py-3 px-4">
      <Link to="/">
        <div>
          <svg className="fill-white w-5 h-5 cursor-pointer">
            <use xlinkHref={`${icons}#icon-chevron-left1`} />
          </svg>
        </div>
      </Link>
      <div className="text-white">{children}</div>
      <div className="flex ">
        <svg className="fill-white w-5 h-5 cursor-pointer mr-5">
          <use xlinkHref={`${icons}#icon-microphone`} />
        </svg>
        <svg className="fill-white w-5 h-5 cursor-pointer">
          <use xlinkHref={`${icons}#icon-settings`} />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
