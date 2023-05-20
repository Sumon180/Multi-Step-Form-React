import React, { useState } from 'react';
import Step1Form from '../components/form/Step1Form';
import Step2Form from '../components/form/Step2Form';
import Step3Form from '../components/form/Step3Form';
import ProgressBar from '../components/ProgressBar';

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formData);

        // Handle form submission here
    };

    const goToNextStep = (): void => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const goToPreviousStep = (): void => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderFormStep = (): JSX.Element | null => {
        switch (currentStep) {
            case 1:
                return (
                    <Step1Form
                        formData={formData}
                        handleInputChange={handleInputChange}
                        goToNextStep={goToNextStep}
                    />
                );
            case 2:
                return (
                    <Step2Form
                        formData={formData}
                        handleInputChange={handleInputChange}
                        goToPreviousStep={goToPreviousStep}
                        goToNextStep={goToNextStep}
                    />
                );
            case 3:
                return (
                    <Step3Form
                        formData={formData}
                        goToPreviousStep={goToPreviousStep}
                        handleSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <ProgressBar totalSteps={3} currentStep={currentStep} />
            <form onSubmit={handleSubmit}>
                {renderFormStep()}
            </form>
        </div>
    );
};

export default MultiStepForm;
