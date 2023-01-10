/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceListRequest } from "../slices/serviceListSlice";
import ServiceItem from "./ServiceItem";
import Loading from "./Loading";
import Error from "./Error";

function ServiceList() {
  const { items, loading, error } = useSelector((state) => state.serviceList);
  console.log(items, loading, error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serviceListRequest());
  }, []);
  return (
    <div className="w-full p-4">
      <h1 className="text-center text-2xl mb-3">Каталог</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <table className="m-2 border-spacing-2 border border-slate-400">
          <thead className="table-head">
            <tr>
              <th className="border border-slate-300 p-2">Наименование</th>
              <th className="border border-slate-300 p-2">Цена</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <ServiceItem key={item.id} {...item} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ServiceList;
