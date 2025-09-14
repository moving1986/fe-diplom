import { Link } from "react-router-dom";

const Payment = () => {

    return (
        <>
            <p>Hellow I am payment</p>
            <p><Link to="/order-confirm" title="Подтверждение заказа">
               Подтверждение заказа
            </Link></p>

            <p><Link to="/" title="На главную">
                На главную
            </Link></p>

        </>
    );
}

export default Payment;

