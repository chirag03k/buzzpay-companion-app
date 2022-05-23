import { atom } from "recoil";
import { CompleteOrderProps, VenueProps } from "../types/components";
import { NormalizedOrders } from "../types/state";

/**
 * Taken straight from buzzpay-master for consistency
 */
export const venueState = atom<VenueProps>({
  key: "venueState",
  default: {
    name: "",
    logoImageUrl: "",
    uuid: "",
  },
});

export const ordersState = atom<NormalizedOrders>({
  key: "getOrdersState",
  default: {
    ids: [],
    byId: {},
  },
});

export const selectedOrderState = atom<string>({
  key: "getSelectedOrderState",
  default: "",
});
