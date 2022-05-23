import { getEndpoint } from "../util/getEndpoint";

export const fetchOrders = async (venueId: string) => {
    if(venueId === '') return [];

    const findEndpoint = getEndpoint('getAllOrders');
    const endpoint = findEndpoint(venueId);
    const response = await fetch(endpoint);
    const itemList = await response.json();

    return itemList; 
}