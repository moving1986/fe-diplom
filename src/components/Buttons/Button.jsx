import './Button.css';

const Button = ({ buttonName, onClick }) => {


    const getBtnContent = () => {
        switch (buttonName) {
            case 'search':
                return {
                    btnClass: 'search-ticket-btn',
                    btnType: 'submit',
                    btnText: 'найти билеты',
                };
            case 'subscribe':
                return {
                    btnClass: 'subscribe-btn',
                    btnType: 'submit',
                    btnText: 'отправить',
                };
            case 'selectSeat':
                return {
                    btnClass: 'btn-select-seat',
                    btnType: 'button',
                    btnText: 'Выбрать места',
             
                };
            default:
                return {
                    btnClass: 'btn',
                    btnType: 'button',
                    btnText: 'кнопка',
                };
        }

    };


    const { btnClass, btnType, btnText } = getBtnContent();

    return (
        <button className={btnClass} type={btnType} onClick={onClick}>{btnText} </button>
    )
}

export default Button;

