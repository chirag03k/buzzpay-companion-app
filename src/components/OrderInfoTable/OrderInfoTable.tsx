import { FC, ReactNode } from "react";
import { CompleteOrderProps, Item } from "../../types/components";
import { CompleteOrderButton } from "../CompleteOrderButton";

export const OrderInfoTable: FC<{ selectedOrder: CompleteOrderProps }> = ({
  selectedOrder,
}) => {
  const buildTable = (
    orderNumber: string,
    head: ReactNode,
    body: ReactNode,
    total: ReactNode
  ) => {
    return (
      <div className={`col-12`}>
        {/*<h2>Order Number: {orderNumber}</h2> */}
        <table className="table table-hover">
          {head}
          <tbody>
            {body}
            <tr key={"Tax"}>
              <td>Tax</td>
              <td>{selectedOrder.tax}</td>
              <td></td>
            </tr>
            <tr key={"Service Fee"}>
              <td>Tip</td>
              <td>{selectedOrder.serviceFee}</td>
              <td></td>
            </tr>
          </tbody>
          {total}
        </table>
        <CompleteOrderButton uuid={selectedOrder.orderNumber} />
      </div>
    );
  };
  const tableHead = (
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
  );
  const itemlist = selectedOrder.items.map((item: Item) => {
    return (
      <tr key={item.item}>
        <td>{item.item}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  });
  const total = (
    <thead>
      <tr>
        <th>Total</th>
        <th>{selectedOrder.total}</th>
      </tr>
    </thead>
  );
  return buildTable(selectedOrder.orderNumber, tableHead, itemlist, total);
};
