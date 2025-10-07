import './Modal.css';
import infoIcon from '../../assets/images/ico-info-modal.svg';

const Modal = ({ modalType, error, onClose, isOpen }) => {
    if (!isOpen) return null;

    const getModalContent = () => {
        switch (modalType) {
            case 'successSubscribe':
                return {
                    title: 'Успешная подписка!',
                    message: 'Вы успешно подписались на нашу рассылку. Спасибо!',
                };
            case 'errorSubscribe':
                return {
                    title: 'Ошибка подписки',
                    message: error || 'Произошла ошибка при попытке подписаться. Пожалуйста, попробуйте еще раз.',
                };
            case 'errorRequest':
                return {
                    title: 'Ошибка при попытке запроса',
                    message: error || 'Произошла ошибка при запросе данных с API.',
                };

            default:
                return {
                    title: 'Уведомление',
                    message: 'Сообщение',
                };
        }
    };

    const { title, message} = getModalContent();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <div className={`modal-header ${modalType}-header`}>
                    <div className="modal-icon">
                        <img src={infoIcon} alt="icon" />
                    </div>
                </div>
                <div className="modal-body">
                    <h3 className="modal-title">{title}</h3>
                    <p className="modal-message">{message}</p>
                </div>
                <div className="modal-footer">
                    <button
                        className="modal-button"
                        onClick={onClose}
                    >
                        Принято
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;