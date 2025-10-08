import './OrderHeader.css'
import MainNav from '../MainNav';
import Logo from '../Logo';
import MainSearchForm from '../MainHeader/components/MainSearchForm';

const OrderHeader = () => {

    return (
        <>
            <header className="main-header">
                <Logo />
                <MainNav />
                  <MainSearchForm 
                    mainContainer='container-search-ticket'
                    formClass='form-search-ticket-order'
                    headerSearch='header-search-order'
                    inputsBlcokSearch='inputs-block-search'
                    formSearchBottn='form-serch-button-order'
                /> 
            </header>
        </>
    );
}

export default OrderHeader;