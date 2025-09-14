import MainHeader from "../components/main/MainHeader";
import { Link } from 'react-router-dom';

const Home = ()  => {

    return (
        <>
            <MainHeader/>       
             <Link to="/select-train" title="Выбор поезда">
                Выбор поезда
            </Link>
        </>
    )
}

export default Home;