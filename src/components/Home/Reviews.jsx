import ReviewsKaterina from "../../assets/images/reviews-katerina.jpg";
import ReviewsEvgeny from "../../assets/images/reviews-evgeny.jpg";

const Reviews = () => {

    return (
        <section className="reviews" id="reviews">
        <div className="container">
            <h2>Отзывы</h2>
            <div className="review-line">

                <div className="reviews-card">
                    <div className="img-reviews">
                        <img src={ReviewsKaterina} alt="" />
                    </div>
                    <div className="reviews-description">
                        <div className="reviews-title">Екатерина
                            Вальнова</div>
                        <div className="reviews-text">
                            "Доброжелательные подсказки на всех
                            этапах помогут правильно
                            заполнить поля и без затруднений
                            купить авиа или ж/д билет, даже если
                            вы заказываете
                            онлайн билет впервые."</div>
                    </div>
                </div>

                <div className="reviews-card" >
                    <div className="img-reviews">
                        <img src={ReviewsEvgeny} alt="" />
                    </div>
                    <div className="reviews-description">
                        <div className="reviews-title">Евгений
                            Стрыкало
                        </div>
                        <div className="reviews-text">"СМС-сопровождение
                            до посадки<br /> Сразу после оплаты
                            ж/д билетов
                            и за 3 часа до отправления мы
                            пришлем вам СМС-напоминание о
                            поездке."</div>
                    </div>
                </div>

            </div>
            <div className="reviews-sliders-btn">
                <ul className="slider-dotted">
                    <li className="slide-dotted activeSlide"></li>
                    <li className="slide-dotted"></li>
                    <li className="slide-dotted"></li>
                    <li className="slide-dotted"></li>
                    <li className="slide-dotted"></li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Reviews;