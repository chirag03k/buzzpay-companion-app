import { getEndpoint } from "../util/getEndpoint";

export const fetchCompleteOrder = async (orderUuid: string) => {

    const endpoint = getEndpoint('putCompleteOrder')(orderUuid);
    const response = await fetch(endpoint, {
        method: 'PUT',
        body: JSON.stringify({
            uuid: orderUuid,
        })
    });
    return response.json();
}