export type Item = {
  item: string;
  price: number;
  quantity: number;
};

export type CompleteOrderProps = {
  status: string;
  orderNumber: string;
  items: Item[];
  time: string;
  tax: number;
  serviceFee: number;
  total: number;
  additionalComponent: number;
};

export type VenueProps = {
  name: string;
  logoImageUrl: string;
  uuid: string;
};
