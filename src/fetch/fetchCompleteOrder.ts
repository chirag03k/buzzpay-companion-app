const COMPLETE_ORDER_URL = "https://iug5vcsbf5.execute-api.us-east-1.amazonaws.com/bar/testbar1/completeOrder"

export const fetchCompleteOrder = async (orderUuid: string) => {

    const response = await fetch(COMPLETE_ORDER_URL, {
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