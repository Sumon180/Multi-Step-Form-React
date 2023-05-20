import React from 'react';

type ProgressBarProps = {
    totalSteps: number;
    currentStep: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ totalSteps, currentStep }) => {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className='flex items-center justify-center my-5'>
            <div>
                <div className="progress-bar bg-gray-200">
                    <div className="progress-bar-fill bg-blue-500" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="progress-bar-labels flex">
                    {Array.from({ length: totalSteps }, (_, index) => (
                        <div
                            key={index}
                            className={`progress-bar-label px-5 py-1 text-2xl font-semibold ${currentStep === index + 1 ? 'active' : ''
                                }`}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
