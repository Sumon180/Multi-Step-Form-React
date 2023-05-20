import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';

type Step1FormProps = {
  formData: {
    firstName: string,
    lastName: string
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  goToNextStep: () => void;
};

const Step1Form: React.FC<Step1FormProps> = ({
  formData,
  handleInputChange,
  goToNextStep,
}) => {
  const { firstName, lastName } = formData;

  const validateForm = (): boolean => {
    if (!firstName || !lastName) {
      return false;
    }
    return true;
  };

  const handleNext = (): void => {
    if (validateForm()) {
      goToNextStep();
    } else {
      console.log("Please fill up required field");
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=' bg-white px-10 py-5 rounded-md' data-aos="fade-down">
      <label className="block mb-2">First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <label className="block mb-2">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        required
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />

      <button
        onClick={handleNext}
        className="bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Step1Form;
