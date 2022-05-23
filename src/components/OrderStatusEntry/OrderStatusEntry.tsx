import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { SINGLE_ORDER_ROUTE } from "../../pages/SingleOrder";
import { StatusColumns } from "../../pages/Status/Status";
import { selectedOrderState } from "../../states/atoms";
import { CompleteOrderProps, Item } from "../../types/components";

const rowClasses = "text-white bg-bluewood";
const entryClasses = "px-6 py-4";

export const OrderStatusEntry: FC<{
  order: CompleteOrderProps;
  columns: StatusColumns[];
}> = ({ order, columns }) => {
  const navigate = useNavigate();
  const setCurrOrder = useSetRecoilState(selectedOrderState);
  return (
    <>
      <tr key={order.orderNumber} className={rowClasses}>
        {columns.map((col) => {
          switch (col) {
            case "Status":
              return (
                <td className={entryClasses}>
                  <h4>{styledStatus(order.status)}</h4>
                </td>
              );
            case "Time of Status":
              return (
                <td className={entryClasses}>
                  <h4>{order.time}</h4>
                </td>
              );
            case "Items":
              return (
                <td className={entryClasses}>
                  <h4>{orderItemsAsString(order.items)}</h4>
                </td>
              );
            case "Order Number":
              return (
                <td className={entryClasses}>
                  <h4>{order.orderNumber}</h4>
                </td>
              );
            case "Actions":
              return (
                <td className={entryClasses}>
                  <button
                    type="button"
                    className="bg-paradiso text-white py-2 px-4 rounded-full hover:drop-shadow-xl"
                    onClick={(e) => {
                      setCurrOrder(order.orderNumber);
                      navigate(SINGLE_ORDER_ROUTE);
                    }}
                    disabled={order.status === "Closed" ? true : false}
                  >
                    Edit
                  </button>
                </td>
              );
          }
        })}
        <td className={entryClasses}>
          <h4>Expand</h4>
        </td>
      </tr>
    </>
  );
};

const styledStatus = (status: string) => {
  const bg = (color: string) => (
    <button
      className={`w-full rounded-full py-2 px-4 ${color} btn-show-order `}
      disabled={status === "Closed" ? true : false}
    >
      {status}
    </button>
  );
  switch (status) {
    case "Purchased":
      return bg("hover:drop-shadow-xl bg-dolly text-outer-space");
    case "Confirmed":
      return bg("hover:drop-shadow-xl bg-granny-smith text-outer-space");
    case "Refunded":
      return bg("hover:drop-shadow-xl bg-white text-outer-space");
    case "Closed":
      return bg("bg-slate cursor-not-allowed");
  }
};

const orderItemsAsString = (items: Item[]) => {
  let result: string = "";
  items.forEach((item) => {
    result += item.quantity.toString() + " " + item.item + ", ";
  });
  return result.slice(0, -2);
};
