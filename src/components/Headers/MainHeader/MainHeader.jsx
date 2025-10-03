import './MainHeader.css';
import MainNav from '../MainNav';
import Logo from '../Logo';
import MainSearchForm from './components/MainSearchForm';


const MainHeader = () => {

    return (
        <header className="header">
            <Logo />
            <MainNav />
            <div className="container relative">
                <div className="header-title">
                    <h1>Вся жизнь -<br /><span>путешествие</span></h1>
                </div>
                <MainSearchForm />              
            </div>
        </header>

    );
}

export default MainHeader;