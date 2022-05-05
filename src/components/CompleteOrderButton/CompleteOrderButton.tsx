import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCompleteOrder } from "../../fetch/fetchCompleteOrder";
import { ALL_ORDERS_ROUTE } from "../../pages/Orders/Orders";


export const CompleteOrderButton : FC<{uuid: string}> = ({uuid}) => {
    const navigate = useNavigate();
    const completeOrder = (uuid : string) => {
            fetchCompleteOrder(uuid);
    }
    
    return (<button type="button" className="btn btn-danger" onClick={(e) => {completeOrder(uuid); navigate(ALL_ORDERS_ROUTE); } }>Complete order</button>);
}