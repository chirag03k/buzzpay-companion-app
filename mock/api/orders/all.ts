import { MockHandler } from "vite-plugin-mock-server";

export const allOrdersHandler: MockHandler = {
  pattern: "/api/orders/all/{venueId}/incompleteOrders",
  method: "GET",
  handle: (req, res) => {
    const responseData = {
      Items: [
        {
          Item: {
            status: "Purchased",
            orderNumber: "1",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-20:55:27",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "2",
            items: [
              {
                item: "Tequila Soda",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-21:15:02",
            tax: 1.0,
            tip: 1.0,
            serviceFee: 1.5,
            total: 11.5,
          },
        },
        {
          Item: {
            status: "Purchased",
            orderNumber: "3",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "4",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "5",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "6",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "7",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Confirmed",
            orderNumber: "8",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Purchased",
            orderNumber: "9",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Closed",
            orderNumber: "10",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
        {
          Item: {
            status: "Refunded",
            orderNumber: "11",
            items: [
              {
                item: "Miller Light",
                price: 5.0,
                quantity: 2,
              },
              {
                item: "White Claw Hard Seltzer",
                price: 8.0,
                quantity: 1,
              },
            ],
            time: "2020-05-22-23:01:59",
            tax: 3.0,
            tip: 2.0,
            serviceFee: 1.5,
            total: 24.5,
          },
        },
      ],
    };
    res.end(JSON.stringify(responseData));
  },
};
