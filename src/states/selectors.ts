import { selector } from "recoil";
import { CompleteOrderProps, Item } from "../types/components";
import { ordersState, selectedOrderState } from "./atoms";

export const getOrdersAsList = selector({
  key: "getOrdersAsList",
  get: ({ get }) => {
    const orders = get(ordersState);
    return orders.ids.map((id) => orders.byId[id]);
  },
});

export const getSelectedOrder = selector<CompleteOrderProps>({
  key: "getSelectedOrder",
  get: ({ get }) => {
    let orders = get(ordersState);
    let selected = get(selectedOrderState);
    console.log("selected " + selected.toString());
    return orders.byId[selected];
  },
});
