import {FC, useEffect} from 'react';
import {venueState, ordersState, selectedOrderState} from './states/atoms';
import './App.css';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Standard } from './layouts/Standard';
import { CompleteOrderProps, VenueProps } from './types/components';
import { fetchOrders } from './fetch/fetchOrders';
import { indexBy } from 'rambda';
import { NormalizedOrders } from './types/state';
import { Route, Routes } from 'react-router-dom';
import { Orders } from './pages/Orders';
import { getSelectedOrder } from './states/selectors';
import { SingleOrder, SINGLE_ORDER_ROUTE } from './pages/SingleOrder';
import { fetchCompleteOrder } from './fetch/fetchCompleteOrder';

const apiVenue: VenueProps = {
  name: 'testbar1',
  logoImageUrl: '',
  uuid: 'testbar1',
}

const App: FC = () => {
  const [venue, setVenue] = useRecoilState(venueState);
  const setOrders = useSetRecoilState(ordersState);
  const setCurrOrder = useSetRecoilState(selectedOrderState);

  // Callback for the interval
  const fetchOrdersInterval = () => {
    fetchOrders(venue.uuid)
      .then((orderData) => {
        const orderList = orderData.Items;
        const orders: NormalizedOrders = {
          ids: orderList.map((order: any) => order.uuid),
          byId: indexBy('uuid', orderList),
        }
        setOrders(orders);
      });
  }

  // On first render, set venue in state
  useEffect(() => {
    // Todo: login features 
    setVenue(apiVenue); 
  }, []);

  // When the venue is set, fetch orders for that venue (on an interval)
  useEffect(() => {
    if (venue.uuid) {
      // call it immediately
      fetchOrdersInterval();
      const refreshTimer = setInterval(fetchOrdersInterval, 15000);
      return () => clearInterval(refreshTimer);
    }
  }, [venue]);

  let fetchedOrders: NormalizedOrders = useRecoilValue(ordersState);
  let selected : CompleteOrderProps = useRecoilValue(getSelectedOrder);

  useEffect(() => {
    if(fetchedOrders.ids.length !== 0) {
      setCurrOrder(fetchedOrders.ids[0]);
    }
  }, [fetchedOrders.ids, selected, setCurrOrder]);

  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path={SINGLE_ORDER_ROUTE} element={<SingleOrder />} />
    </Routes>
  );
}

export default App;
