import React from "react";
import { useNavigate } from "react-router-dom";
function ServiceItem({ id, name, price }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}/details`);
  };
  return (
    <tr onClick={handleClick} className="cursor-pointer">
      <td className="border border-slate-300 p-2">{name}</td>
      <td className="border border-slate-300 p-2">{price}</td>
    </tr>
  );
}

export default ServiceItem;
