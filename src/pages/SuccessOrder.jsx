import { Link } from 'react-router-dom';
import SuccessOrderHeader from '../components/Headers/SuccessOrderHeader/SuccessOrderHeader';
import Footer from '../components/Footer/Footer';
import IcoRubTotalPriceEnd from '../assets/images/ico-rub-total-price-end.svg';
import IcoSendTicketEmail from '../assets/images/ico-send-ticket-email.svg';
import IcoPrintTicket from '../assets/images/ico-print-ticket.svg';
import IcoTakeTicket from '../assets/images/ico-take-ticket.svg';
import IcoRateStar from '../assets/images/ico-rate-star.svg';

const SuccessOrder = () => {

    return (
        <>
            <SuccessOrderHeader />
            
                <main>
                    <div className="container-success-order">
                        <div className="card-success-order">
                            <div className="header-card-success-order">
                                <div className="number-order">
                                    №Заказа 285АА
                                </div>
                                <div className="total-price-succeess-order">
                                    сумма&nbsp;<span>7 760</span>&nbsp;<img src={IcoRubTotalPriceEnd} alt="" />
                                </div>
                            </div>

                            <div className="tickets-staps">
                                <div className="ticket-stap">
                                    <div className="ico-stap-ticket">
                                        <img src={IcoSendTicketEmail} alt="" />
                                    </div>
                                    <div className="ticket-stap-text">
                                        билеты будут отправлены <br />
                                        на ваш <span>e-mail</span>
                                    </div>
                                </div>
                                <div className="ticket-stap">
                                    <div className="ico-stap-ticket">
                                        <img src={IcoPrintTicket} alt="" />
                                    </div>
                                    <div className="ticket-stap-text">
                                        <span>распечатайте</span><br />
                                        и сохраняйте билеты
                                        до даты поездки
                                    </div>
                                </div>
                                <div className="ticket-stap">
                                    <div className="ico-stap-ticket">
                                        <img src={IcoTakeTicket} alt="" />
                                    </div>
                                    <div className="ticket-stap-text">
                                        <span>предьявите</span> распечатанные
                                        билеты при посадке
                                    </div>
                                </div>
                            </div>

                            <div className="success-order-text">
                                <div className="header-success-order-text">Ирина Эдуардовна!</div>
                                <div className="body-success-order-text">Ваш заказ успешно оформлен. <br />
                                    В ближайшее время с вами свяжется наш оператор для подтверждения.
                                </div>
                                <div className="ps-success-order-text">Благодарим Вас за оказанное доверие и желаем приятного путешествия!</div>
                            </div>

                            <div className="footer-success-order-card">
                                <div className="rate">
                                    <div className="rate-service">
                                        Оценить сервис
                                    </div>
                                    <div className="rate-starts">
                                        <img src={IcoRateStar} alt="" />
                                        <img src={IcoRateStar} alt="" />
                                        <img src={IcoRateStar} alt="" />
                                        <img src={IcoRateStar} alt="" />
                                        <img src={IcoRateStar} alt="" />
                                    </div>
                                </div>
                                <div className="btn-back-index">
                                    <Link to='/' title='Главная страница'>
                                        <button className="btn-back-to-main">вернуться на главную</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
             <Footer />
        </>
    );
}

export default SuccessOrder;