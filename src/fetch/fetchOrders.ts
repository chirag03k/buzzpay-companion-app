const API_PATH = 'https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar/';
// testbar1/incompleteOrders';

export const fetchOrders = async (barId: string) => {
    if(barId === '') return [];

    const response = await fetch(`${API_PATH}${barId}/incompleteOrders`);
    const itemList = await response.json();

    return itemList; 
}