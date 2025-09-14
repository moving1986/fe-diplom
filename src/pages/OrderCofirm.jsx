import { Link } from "react-router-dom";

const OrderConfirm = () => {

    return (
        <>
         <p>Hellow I am order confirm</p>
            <p><Link to="/success-order" title="Успешный заказ">
              Успешный заказ
            </Link></p>

            <p><Link to="/" title="На главную">
                На главную
            </Link></p>
        </>
    );
}

export default OrderConfirm;