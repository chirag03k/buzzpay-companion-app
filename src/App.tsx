import { FC, useEffect, useState } from "react";
import { venueState, ordersState, selectedOrderState } from "./states/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CompleteOrderProps, VenueProps } from "./types/components";
import { fetchOrders } from "./fetch/fetchOrders";
import { indexBy } from "rambda";
import { NormalizedOrders } from "./types/state";
import { Route, Routes } from "react-router-dom";
import { Status } from "./pages/Status";
import { getSelectedOrder } from "./states/selectors";
import { SingleOrder, SINGLE_ORDER_ROUTE } from "./pages/SingleOrder";

const apiVenue: VenueProps = {
  name: "Ye Old Tavern",
  logoImageUrl:
    "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_1200,h_800,f_auto,fl_lossy,q_80,c_fit/ky27qlidr4nrgys6u76q",
  uuid: "testbar1",
};

const App: FC = () => {
  const [venue, setVenue] = useRecoilState(venueState);
  const setOrders = useSetRecoilState(ordersState);
  const setCurrOrder = useSetRecoilState(selectedOrderState);
  const [olist, setolist] = useState([]);

  // Callback for the interval
  const fetchOrdersInterval = () => {
    fetchOrders(venue.uuid).then((orderData) => {
      const orderList = orderData.Items.map((o: any) => o.Item);
      const orders: NormalizedOrders = {
        ids: orderList.map((order: any) => order.orderNumber),
        byId: indexBy("orderNumber", orderList),
      };
      setOrders(orders);
      setolist(orderList);
    });
  };

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
  let selected: CompleteOrderProps = useRecoilValue(getSelectedOrder);

  return (
    <Routes>
      <Route path="/" element={<Status />} />
      <Route path={SINGLE_ORDER_ROUTE} element={<SingleOrder />} />
    </Routes>
  );
};

export default App;
