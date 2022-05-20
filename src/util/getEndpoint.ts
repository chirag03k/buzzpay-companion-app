type EndpointId = 'getAllOrders' | 'putCompleteOrder';

type EndpointMap = {
  [key in EndpointId]: {
    dev: string;
    prod: string;
  };
};

const endpointsMap: EndpointMap = {
  getAllOrders: {
    dev: '/api/orders/all',
    prod: 'https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar',
  },
  putCompleteOrder: {
    dev: '/api/orders/complete',
    prod: 'https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar/testbar1/completeOrder',
  },
};

// Pull a different endpoint depending on which environment
export const getEndpoint = (id: EndpointId): string => endpointsMap[id][import.meta.env.DEV ? 'dev' : 'prod'];
