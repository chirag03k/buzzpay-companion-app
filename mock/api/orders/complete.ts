import {MockHandler} from 'vite-plugin-mock-server';

export const completeOrdersHandler: MockHandler = {
  pattern: '/api/orders/complete',
  method: 'PUT',
  handle: (req, res) => {
    res.end(JSON.stringify({
      // uuid, // TODO: pull the uuid out of the request body
      complete: true,
    }));
  },
};
