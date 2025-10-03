import Logo from '../Logo';
import MainNav from '../MainNav';
import './SuccessOrderHeader.css';

const SuccessOrderHeader = () => {

    return (
        <header className="main-header-success-order ">
        <Logo />
        <MainNav />
        <div className="container-success-order">
            <div className="header-success-order">Благодарим Вас за заказ!</div>
          </div>
    </header>
    )
}

export default SuccessOrderHeader;
