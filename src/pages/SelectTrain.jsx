import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import FilterWays from '../components/FilterWays';
import LastTrips from '../components/LastTrips';
import Footer from '../components/Footer/Footer';
import CardSelectTrain from '../components/SelectTrain/CardSelectTrain';


const SelectTrain = () => {



    return (
        <>
            <OrderHeader />
            <StepsLine />
            <div className="light-grey-bg">
                <div className="container">
                    <main className="main-order-tickets">
                        <aside className="detail-trip">
                            <FilterWays />
                            <LastTrips />
                        </aside>

                        <section className="main-tickets">
                            <div className="info-seach-tecket">
                                <div className="found-ticket">найдено 20 </div>
                                <div className="sort-by">сортировать по:
                                    <select name="" id="">
                                        <option value="time">времени</option>
                                        <option value="price">стоимости</option>
                                        <option value="">длительности</option>
                                    </select>
                                </div>
                                <div className="view-by">показывать по: <span>5</span> 10 20</div>
                            </div>

                        <CardSelectTrain />


                            <div className="brad-crumbs">
                                <div className="first-page">&lt;</div>
                                <div className="page-brad-crumbs brad-crumbs-active">1</div>
                                <div className="page-brad-crumbs">2</div>
                                <div className="page-brad-crumbs brad-crumbs-hover">3</div>
                                <div className="last-page">&gt;</div>

                            </div>

                        </section>

                    </main>
                </div>
            </div>

            <Footer />


        </>
    );
}

export default SelectTrain;