/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { serviceRequest } from "../slices/serviceSlice";
import Loading from "./Loading";
import Error from "./Error";

function ServiceDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { item, loading, error } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(serviceRequest(id));
  }, [id]);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full p-4">
      <h3 className="text-center text-2xl mb-3">Карточка товара</h3>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error id={id} />
      ) : (
        <div div className="relative w-1/3 p-3 border mx-auto">
          <div
            onClick={handleClick}
            className="absolute right-0 top-0 w-3 h-3 border-1 cursor-pointer"
          >
            X
          </div>
          <div className="text-xl text-center mb-2">{item.name}</div>
          <div>Цена - {item.price}&#8381;</div>
          <div>{item.content}</div>
        </div>
      )}
    </div>
  );
}

export default ServiceDetails;
