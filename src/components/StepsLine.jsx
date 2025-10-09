import "./StepsLine.css";
import { useLocation } from 'react-router-dom';

const StepsLine = () => {
    const location = useLocation();
    
    const steps = [
        { number: 1, path: '/select-train', label: 'Начало' },
        { number: 2, path: '/passengers', label: 'Пассажиры' },
        { number: 3, path: '/payment', label: 'Оплата' },
        { number: 4, path: '/order-confirm', label: 'Проверка' }
    ];

    const getActiveStep = () => {
        const currentStep = steps.find(step => 
            location.pathname.includes(step.path) || 
            location.pathname === step.path
        );
        return currentStep ? currentStep.number : 1;
    };

    const activeStep = getActiveStep();
    const isLastStep = activeStep === 4;

    const getStepClass = (stepNumber) => {
        if (isLastStep || stepNumber < activeStep) {
            return "steps-line-item active-load-line-hover";
        } else if (stepNumber === activeStep) {
            return "steps-line-item active-load-line";
        } else {
            return "steps-line-item";
        }
    };

    return (
        <div className="covers-steps-line">
            <div className={`left-cover ${isLastStep ? 'last-step-active' : ''}`}></div>
            <div className={`steps-line ${isLastStep ? 'last-step-active' : ''}`}>
                {steps.map(step => (
                    <div key={step.number} className={getStepClass(step.number)}>
                        <div className="circle">{step.number}</div>
                        <span className="steps-line-inner__text">{step.label}</span>
                    </div>
                ))}
            </div>
            <div className={`right-cover ${isLastStep ? 'last-step-active' : ''}`}></div>
        </div>
    );
}

export default StepsLine;