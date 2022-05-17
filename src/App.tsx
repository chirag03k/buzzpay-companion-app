import {FC, useEffect, useState} from 'react';
import {venueState, ordersState, selectedOrderState} from './states/atoms';
import './App.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Standard } from './layouts/Standard';
import { CompleteOrderProps, VenueProps } from './types/components';
import { fetchOrders } from './fetch/fetchOrders';
import { indexBy } from 'rambda';
import { NormalizedOrders } from './types/state';
import { Route, Routes } from 'react-router-dom';
import { Orders } from './pages/Orders';
import { getSelectedOrder } from './states/selectors';
import { SingleOrder, SINGLE_ORDER_ROUTE } from './pages/SingleOrder';

const apiVenue: VenueProps = {
  name: 'testbar1',
  logoImageUrl: '',
  uuid: 'testbar1',
}

const App: FC = () => {
  const setVenue = useSetRecoilState(venueState);
  const setOrders = useSetRecoilState(ordersState);
  const setCurrOrder = useSetRecoilState(selectedOrderState);
  const [olist, setolist] = useState([]);

  useEffect(() => {
    // Todo: login features 
    setVenue(apiVenue); 
  }, [setVenue]);

  const venue: VenueProps = useRecoilValue(venueState);

  useEffect(() => {
    const refreshTimer = setInterval(() => {
      fetchOrders(venue.uuid)
      .then((orderData) => {
        const orderList = orderData.Items.map((o: any) => o.Item);
        const orders: NormalizedOrders = {
          ids: orderList.map((order: any) => order.uuid),
          byId: indexBy('uuid', orderList),
        }
        setOrders(orders);
        setolist(orderList);
      });
      console.log(olist);
    }, 3000);
    return () => clearInterval(refreshTimer);
  });

  let fetchedOrders: NormalizedOrders = useRecoilValue(ordersState);
  let selected : CompleteOrderProps = useRecoilValue(getSelectedOrder);

  useEffect(() => {
    if(fetchedOrders.ids.length !== 0) {
      setCurrOrder(fetchedOrders.ids[0]);
    }
  }, [fetchedOrders.ids, selected, setCurrOrder]);

  return (
    <Routes >
      <Route path="/" element={<Orders />} />
      <Route path={SINGLE_ORDER_ROUTE} element={<SingleOrder />} />
    </Routes>
  );
}

export default App;
