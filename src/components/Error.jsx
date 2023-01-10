import React from "react";
import { useDispatch } from "react-redux";
import { serviceRequest } from "../slices/serviceSlice";
import { serviceListRequest } from "../slices/serviceListSlice";

function Error({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    id ? dispatch(serviceRequest(id)) : dispatch(serviceListRequest());
  };
  return (
    <div className="flex justify-start items-center bg-red-200 p-7 w-fit">
      <span className="text-red-800">Произошла ошибка!</span>
      <button
        onClick={handleClick}
        className="h-10 px-6 font-semibold rounded-md bg-gray-600 text-white ml-2 cursor-pointer"
      >
        Повторить запрос
      </button>
    </div>
  );
}

export default Error;
