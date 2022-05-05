// import { getByDisplayValue } from '@testing-library/react';
import {selector} from 'recoil';
import { CompleteOrderProps } from '../types/components';
import { ordersState, selectedOrderState } from './atoms';

export const getOrdersAsList = selector({
    key: 'getOrdersAsList',
    get: ({get}) => {
        const orders = get(ordersState);
        return orders.ids.map((id) => orders.byId[id]);
    }
});

export const getSelectedOrder = selector<CompleteOrderProps>({
    key: 'getSelectedOrder',
    get: ({get}) => {
        const orders = get(ordersState);
        const selected = get(selectedOrderState);
        return orders.byId[selected];
    }
});