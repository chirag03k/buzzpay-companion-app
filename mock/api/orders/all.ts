import {MockHandler} from 'vite-plugin-mock-server';

export const allOrdersHandler: MockHandler = {
  pattern: '/api/orders/all/{venueId}/incompleteOrders',
  method: 'GET',
  handle: (req, res) => {
    const responseData = {
      Items: [{
        uuid: '1',
        logoImageUrl: '/assets/logos/mansion-on-rush-logo.png',
        venueName: 'MANSION ON RUSH',
        itemCount: 1,
        amount: 13.82,
        date: 'Mar 21, 2022',
        status: 'Incomplete',
      },
      {
        uuid: '2',
        logoImageUrl: '/assets/logos/mansion-on-rush-logo.png',
        venueName: 'MANSION ON RUSH',
        itemCount: 6,
        amount: 92.41,
        date: 'Mar 21, 2022',
        status: 'Incomplete',
      },
      {
        uuid: '3',
        logoImageUrl: '/assets/logos/222-logo.png',
        venueName: '2Twenty2 Tavern',
        itemCount: 4,
        amount: 67.55,
        date: 'Mar 14, 2022',
        status: 'Complete',
      },
      {
        uuid: '4',
        logoImageUrl: '/assets/logos/matchbox-logo.jpeg',
        venueName: 'Matchbox Bar',
        itemCount: 4,
        amount: 59.35,
        date: 'Mar 7, 2022',
        status: 'Complete',
      },
      {
        uuid: '5',
        logoImageUrl: '/assets/logos/three-dots-logo.png',
        venueName: 'Three Dots and a Dash',
        itemCount: 2,
        amount: 24.53,
        date: 'Mar 1, 2022',
        status: 'Complete',
      },
      {
        uuid: '6',
        logoImageUrl: '/assets/logos/whiskey-business-logo.png',
        venueName: 'Whiskey Business',
        itemCount: 1,
        amount: 14.13,
        date: 'Feb 22, 2022',
        status: 'Complete',
      },
    ]};
    res.end(JSON.stringify(responseData));
  },
};
