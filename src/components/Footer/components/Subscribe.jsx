import './Subscribe.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BASE_URL } from '../../../api/api';
import Modal from '../../Modal/Modal'; 
import Button from '../../Buttons/Button';

const Subscribe = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting },
        reset
    } = useForm({
        mode: 'onChange',
        defaultValues: { email: '' }
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch(BASE_URL + '/subscribe?email=' + encodeURIComponent(data.email), {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Успешная подписка:', result);
            
            setModalType('successSubscribe');
            setShowModal(true);
            setIsSubscribed(true);
            reset();
            
        } catch (error) {
            console.error('Ошибка подписки:', error);
            setErrorMessage(error.message || 'Произошла ошибка при подписке');
            setModalType('errorSubscribe');
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setErrorMessage('');
    };

    return (
        <>
            <div className="footer-header-subscribe">
                Подписка
            </div>
            <div className="header-subscribe-form">
                Будьте в курсе событий
            </div>
            <form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="footer-subscribe-input"
                    type="email"
                    placeholder="Введите ваш email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Неверный формат email'
                        }
                    })}
                />
                 <Button
                    buttonName="subscribe"
                    disabled={!isDirty || !isValid || isSubmitting}
                />
                {errors.email && (
                    <span className="error-message-subscribe">{errors.email.message}</span>
                )}
            </form>

            <Modal 
                isOpen={showModal}
                modalType={modalType}
                error={errorMessage}
                onClose={closeModal}
            />
        </>
    );
};

export default Subscribe;