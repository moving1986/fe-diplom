import './OrderHeader.css'
import MainNav from '../MainNav';
import Logo from '../Logo';
import OrderSearchForm from './components/OrderSearchForm';

const OrderHeader = () => {

    return (
        <>
            <header className="main-header">
                <Logo />
                <MainNav />
                <OrderSearchForm />
            </header>
        </>
    );
}

export default OrderHeader;