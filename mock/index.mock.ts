import {MockHandler} from 'vite-plugin-mock-server';
import {allOrdersHandler} from './api/orders/all';
import {completeOrdersHandler} from './api/orders/complete';

const mocks: MockHandler[] = [allOrdersHandler, completeOrdersHandler];

export default mocks;
