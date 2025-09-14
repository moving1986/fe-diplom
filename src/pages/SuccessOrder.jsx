import { Link } from "react-router-dom";

const SuccessOrder = () => {

    return (
        <>
        <p>Успешный заказ</p>
             <p><Link to="/" title="На главную">
                На главную
            </Link></p>
        </>

    );
}

export default SuccessOrder;