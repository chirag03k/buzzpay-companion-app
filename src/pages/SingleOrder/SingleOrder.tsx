import { FC, ReactComponentElement, ReactNode, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Card } from "../../components/Card";
import { CompleteOrderButton } from "../../components/CompleteOrderButton";
import { VerticalRhythmContainer } from "../../components/VerticalRhythmContainer";
import { fetchCompleteOrder } from "../../fetch/fetchCompleteOrder";
import { Standard } from "../../layouts/Standard";
import { getSelectedOrder } from "../../states/selectors";
import { CompleteOrderProps, Item } from "../../types/components";

export const SINGLE_ORDER_ROUTE = "/single_order";

export const SingleOrder: FC = () => {
  const selectedOrder: CompleteOrderProps = useRecoilValue(getSelectedOrder);
  const outerClasses =
    "relative overflow-x-auto rounded-3xl sticky top-0 text-white";
  const theaderClasses = "text-white uppercase bg-bluewood shadow-2xl";
  const thClasses = "px-6 py-3";
  const rowClasses = "text-white bg-bluewood";

  const buildTable = (
    orderNumber: string,
    head: ReactNode,
    body: ReactNode,
    total: ReactNode
  ) => {
    console.log(selectedOrder.orderNumber);
    return (
      <div className="w-full">
        <VerticalRhythmContainer>
          <Card>
            <h2 className="text-white">Order Number: {orderNumber}</h2>
          </Card>
        </VerticalRhythmContainer>

        <VerticalRhythmContainer>
          <div className={outerClasses}>
            <table className="w-full text-left">
              {head}
              <tbody>
                {body}
                <tr className={rowClasses} key={"Tax"}>
                  <td className={thClasses}>Tax</td>
                  <td className={thClasses}>{selectedOrder.tax}</td>
                  <td className={thClasses}></td>
                </tr>
                <tr className={rowClasses} key={"Service Fee"}>
                  <td className={thClasses}>Tip</td>
                  <td className={thClasses}>{selectedOrder.serviceFee}</td>
                  <td className={thClasses}></td>
                </tr>
              </tbody>
              {total}
            </table>
          </div>
        </VerticalRhythmContainer>

        <VerticalRhythmContainer>
          <div className="content-center">
            <CompleteOrderButton uuid={selectedOrder.orderNumber} />
          </div>
        </VerticalRhythmContainer>
      </div>
    );
  };
  const tableHead = (
    <thead className={theaderClasses}>
      <tr>
        <th className={thClasses}>Item</th>
        <th className={thClasses}>Price</th>
        <th className={thClasses}>Quantity</th>
      </tr>
    </thead>
  );
  const itemlist = selectedOrder.items.map((item: Item) => {
    return (
      <tr className={rowClasses} key={item.item}>
        <td className={thClasses}>
          <p>{item.item}</p>
        </td>
        <td className={thClasses}>
          <p>{item.price}</p>
        </td>
        <td className={thClasses}>
          <p>{item.quantity}</p>
        </td>
      </tr>
    );
  });
  const total = (
    <thead className={theaderClasses}>
      <tr>
        <th className={thClasses}>Total</th>
        <th className={thClasses}>{selectedOrder.total}</th>
        <th className={thClasses}></th>
      </tr>
    </thead>
  );

  return (
    <Standard
      body={buildTable(selectedOrder.orderNumber, tableHead, itemlist, total)}
    />
  );
};
