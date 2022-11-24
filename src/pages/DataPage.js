/* eslint-disable */
import { Link } from "react-router-dom";

const DataPage = (props) => {
  //  eslint-disable-next-line react/prop-types
  const { id, index, image, name } = props;
  return (
    <Link
      to={`/dataPage/${id}`}
      key={id}
      className="data-page basis-2/4 flex justify-center items-center flex-col"
    >
      <div>
        <img
          src={image}
          alt="Country flag"
          className="w-16 h-16 rounded-full mt-4 drop-shadow-lg my-auto mx-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-white mt-4 mb-2 font-semibold text-center">
          {name}
        </h3>
      </div>
    </Link>
  );
};

export default DataPage;
