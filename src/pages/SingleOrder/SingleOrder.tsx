import {FC, ReactComponentElement, ReactNode, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { CompleteOrderButton } from '../../components/CompleteOrderButton';
import { fetchCompleteOrder } from '../../fetch/fetchCompleteOrder';
import { Standard } from '../../layouts/Standard';
import { getSelectedOrder } from '../../states/selectors';
import { CompleteOrderProps, Item } from '../../types/components';

export const SINGLE_ORDER_ROUTE = "/single_order"

export const SingleOrder: FC = () => {

    const selectedOrder: CompleteOrderProps = useRecoilValue(getSelectedOrder);

    const buildTable = (uuid : string, head : ReactNode, body: ReactNode, total: ReactNode) => {
        return(
            <div className={`col-12`}>
                <h2>{uuid}</h2>
                <table className="table table-hover">
                {head}
                <tbody>
                {body}
                    <tr key={"tax"}>
                    <td>Tax</td>
                    <td>{selectedOrder.tax}</td>
                    </tr>
                    <tr key={"tip"}>
                    <td>Tip</td>
                    <td>{selectedOrder.tip}</td>
                    </tr>
                    </tbody>
                {total}
                </table>
                <CompleteOrderButton uuid={selectedOrder.uuid} />
            </ div>
        );
      };
      const tableHead = (
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
      );
      const itemlist = selectedOrder.items.map((item : Item) => {
        return (
          <tr key={item}>
            <td>{item}</td>
            <td></td>
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
    
      return (<Standard body={buildTable(selectedOrder.uuid, tableHead, itemlist, total)} />);
    
}