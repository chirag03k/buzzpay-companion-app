export type Item =  string;

export type CompleteOrderProps = {
    uuid: string,
    items: Item[],
    tax: number,
    tip: number,
    total: number,
    orderTime: string
};

export type VenueProps = {
    name: string,
    logoImageUrl: string,
    uuid: string,
}