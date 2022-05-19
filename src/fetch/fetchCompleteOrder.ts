import { getEndpoint } from "../util/getEndpoint";

export const fetchCompleteOrder = async (orderUuid: string) => {

    const endpoint = getEndpoint('putCompleteOrder');
    const response = await fetch(endpoint, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uuid: orderUuid,
        })
    });
    return response.json();
}