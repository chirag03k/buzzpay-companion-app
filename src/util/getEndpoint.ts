type EndpointId = "getAllOrders" | "putCompleteOrder";

type EndpointMap = {
  [key in EndpointId]: {
    dev: (venueId: string) => string;
    prod: (venueId: string) => string;
  };
};

const endpointsMap: EndpointMap = {
  getAllOrders: {
    dev: (venueId: string) => "/api/orders/all/{venueId}/incompleteOrders",
    prod: (venueId: string) =>
      `https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar/${venueId}/incompleteOrders`,
  },
  putCompleteOrder: {
    dev: (venueId: string) => "/api/orders/complete",
    prod: (venueId: string) =>
      `https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar/${venueId}/completeOrder`,
  },
};

// Pull a different endpoint depending on which environment
export const getEndpoint = (id: EndpointId): ((venueId: string) => string) =>
  endpointsMap[id][import.meta.env.DEV ? "dev" : "prod"];
