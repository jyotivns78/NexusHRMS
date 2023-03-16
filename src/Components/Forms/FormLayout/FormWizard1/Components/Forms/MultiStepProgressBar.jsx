import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepZilla from "react-stepzilla";


const steps = [
  { name : "Basic", component : <StepOne /> },
  { name : "Contact", component : <StepTwo /> },
  { name : "Contact", component : <StepThree /> },
]

const MultiSteps = () => {
  return (
    <div className="step-progress">
      <StepZilla steps={steps} />
    </div>
  )
}


export default MultiSteps;

