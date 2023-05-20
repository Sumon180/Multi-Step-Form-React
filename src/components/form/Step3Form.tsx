import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import FormCard from './FormCard';

type Step3FormProps = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  goToPreviousStep: () => void;
  handleSubmit: (event: never) => void;
};

const Step3Form: React.FC<Step3FormProps> = ({
  formData,
  goToPreviousStep,
  handleSubmit,
}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <FormCard>
      <h2>Step 3: Confirmation</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Password: ********</p>
      <div className="flex justify-between">
        <button onClick={goToPreviousStep} className="bg-gray-500 text-white rounded-md px-4 py-2">Previous</button>
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white rounded-md px-4 py-2">
          Submit
        </button>
      </div>
    </FormCard>

  );
};

export default Step3Form;
