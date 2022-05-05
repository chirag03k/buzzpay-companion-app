import {atom} from 'recoil';
import {CompleteOrderProps, VenueProps} from '../types/components';
import {NormalizedOrders} from '../types/state';

/**
 * Taken straight from buzzpay-master for consistency
 */
export const venueState = atom<VenueProps>({
    key: 'venueState',
    default: {
      name: '',
      logoImageUrl: '',
      uuid: '',
    },
});

export const ordersState = atom<NormalizedOrders>({
    key: 'getOrdersState',
    default: {
        ids: [],
        byId: {},
    },
});

export const selectedOrderState = atom<string>({
    /*
    key: 'getSelectedOrderState',
    default: {
        id: '',
        items: [],
        tax: 0.0,
        tip: 0.0,
        total: 0.0,
        date: ''
    }
    */
   key: 'getSelectedOrderState',
   default: ''
});