import { FC } from "react";
import { useRecoilValue } from "recoil";
import { getOrdersAsList } from "../../states/selectors";

export type TotalsColumns =
  | "Item"
  | "Price"
  | "Quantity"
  | "Subtotal"
  | "Tip"
  | "Grand Total";

export const Totals: FC = () => {
  const orders = useRecoilValue(getOrdersAsList);

  return <></>;
};
