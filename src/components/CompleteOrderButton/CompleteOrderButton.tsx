import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCompleteOrder } from "../../fetch/fetchCompleteOrder";
import { ALL_ORDERS_ROUTE } from "../../pages/Status/Status";

export const CompleteOrderButton: FC<{ uuid: string }> = ({ uuid }) => {
  const navigate = useNavigate();
  const completeOrder = (uuid: string) => {
    fetchCompleteOrder(uuid);
  };

  return (
    <button
      type="button"
      className="bg-dolly font-bold py-2 px-4 rounded-full"
      onClick={(e) => {
        completeOrder(uuid);
        navigate(ALL_ORDERS_ROUTE);
      }}
    >
      Complete order
    </button>
  );
};
