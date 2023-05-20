import React, { useEffect } from 'react';
import AOS from "aos"
import 'aos/dist/aos.css';

type Step2FormProps = {
  formData: {
    email: string;
    password: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
};

const Step2Form: React.FC<Step2FormProps> = ({
  formData,
  handleInputChange,
  goToPreviousStep,
  goToNextStep,
}) => {
  const { email, password } = formData;

  const validateForm = (): boolean => {
    if (!email || !password) {
      return false;
    }
    return true;
  };

  const handleNext = (): void => {
    if (validateForm()) {
      goToNextStep();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=' bg-white px-10 py-5 rounded-md' data-aos="fade-down">
      <label className="block mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <label className="block mb-2">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <div className="flex justify-between">
        <button
          onClick={goToPreviousStep}
          className="bg-gray-500 text-white rounded-md px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
