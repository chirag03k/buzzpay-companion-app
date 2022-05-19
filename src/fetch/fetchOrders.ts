import { getEndpoint } from "../util/getEndpoint";

export const fetchOrders = async (barId: string) => {
    if(barId === '') return [];

    const endpoint = getEndpoint('getAllOrders');
    const response = await fetch(`${endpoint}/${barId}/incompleteOrders`);
    const itemList = await response.json();

    return itemList; 
}