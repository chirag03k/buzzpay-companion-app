import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Standard } from "../../layouts/Standard";
import { getOrdersAsList } from "../../states/selectors";
import { CompleteOrderProps } from "../../types/components";
import { OrderStatusEntry } from "../../components/OrderStatusEntry";
import { VerticalRhythmContainer } from "../../components/VerticalRhythmContainer";

export const ALL_ORDERS_ROUTE = "/";

export type StatusColumns =
  | "Status"
  | "Time of Status"
  | "Items"
  | "Order Number"
  | "Actions";

const headerClasses = "text-sm font-medium text-gray-900 px-6 py-4 text-left";

export const Status: FC = () => {
  const orders: CompleteOrderProps[] = useRecoilValue(getOrdersAsList);
  const columns: StatusColumns[] = [
    "Status",
    "Time of Status",
    "Items",
    "Order Number",
    "Actions",
  ];

  const thClasses = "px-6 py-3";

  return (
    <Standard
      body={
        <>
          <div className="relative overflow-x-auto rounded-3xl sticky top-0">
            <table className="w-full text-left">
              <thead className="text-white uppercase bg-bluewood shadow-2xl">
                <tr>
                  {columns.map((col) => (
                    <th scope="col" className={thClasses}>
                      <h4>{col}</h4>
                    </th>
                  ))}
                  <th className={thClasses}>
                    <h4>Expand</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderStatusEntry order={order} columns={columns} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
    />
  );
};
