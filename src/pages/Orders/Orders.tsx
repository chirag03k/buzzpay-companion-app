import {FC, useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Standard } from '../../layouts/Standard';
import { selectedOrderState } from '../../states/atoms';
import { getOrdersAsList } from '../../states/selectors';
import { CompleteOrderProps } from '../../types/components';
import { SINGLE_ORDER_ROUTE } from '../SingleOrder';

export const ALL_ORDERS_ROUTE = "/";

export const Orders: FC = () => {

    const orders: CompleteOrderProps[] = useRecoilValue(getOrdersAsList);
    const setCurrOrder = useSetRecoilState(selectedOrderState);
    const navigate = useNavigate();

    /* 
    useEffect(() => {
        console.log("logged");
        console.log(orders[0]);
    });
    */

    const tableData = orders.map((order) => {
    if(order.uuid === null) {
        return null;
    } else {
        return ( 
        <tr key={order.uuid}>
            <td>{order.orderTime}</td>
            <td>{order.uuid}</td>
            <td>
            <button type="button" 
                className="btn btn-primary btn-show-order" 
                onClick={(e) => {setCurrOrder(order.uuid); navigate(SINGLE_ORDER_ROUTE); } }>
                Show order
            </button>
            </td>
        </tr>
        );
    }
    });

    return (

        <Standard 
            body = {
        <div className={`col-12`} >
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Order Time</th>
                        <th>Order UUID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
            }
        />

    );
}