import { FC } from "react";
import { TotalsColumns } from "../../pages/Totals/Totals";
import { CompleteOrderProps } from "../../types/components";

export const OrderTotalEntry: FC<{
  columns: TotalsColumns[];
  order: CompleteOrderProps;
}> = ({ columns, order }) => {
  return <></>;
};
