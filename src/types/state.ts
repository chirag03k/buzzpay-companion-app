import { CompleteOrderProps } from "./components";

/**
 * Taken straight from buzzpay-master
 * Slightly different in that it gives completed orders instead of orders
 */
export type NormalizedOrders = {
    ids: string[];
    byId: {
      [id: string]: CompleteOrderProps;
    };
};