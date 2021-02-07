import React, { useState } from "react";
import Layout from "../../layout";
import Step1 from "./elements/Step1";
import Step2 from "./elements/Step2";
import Step3 from "./elements/Step3";
import Step4 from "./elements/Step4";
import Step5 from "./elements/Step5";
import Step6 from "./elements/Step6";
import Step7 from "./elements/Step7";
import Step8 from "./elements/Step8";
import Step9 from "./elements/Step9";
import Step10 from "./elements/Step10";
import Stepper from "../../components/Stepper";

const App = () => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(8);
  const onChange = (key, value) => {
    let obj = errors;
    delete obj[key];
    setErrors(obj);
    setState({ ...state, [key]: value });
  };

  const changeStep = (value) => {
    let hasErrors = validate();
    if (Object.keys(hasErrors).length) setErrors(hasErrors);
    else setStep(value);
  };

  const onSubmit = () => {
    alert("submit");
  };

  const validate = () => {
    let hasErrors = {};
    if (step === 0) {
      if (!state.businessType) {
        hasErrors["businessType"] = true;
      }
    }
    return hasErrors;
  };

  const steps = [
    {
      navigations: ["continue"],
      Component: () => (
        <Step1 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["continue"],
      Component: () => (
        <Step2 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["continue"],
      Component: () => (
        <Step3 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["continue"],
      Component: () => (
        <Step4 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["continue"],
      Component: () => (
        <Step5 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["continue"],
      Component: () => (
        <Step6 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["Next page"],
      Component: () => (
        <Step7 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      title:
        "List all owners of 20% or more of the equity of the applicant. Attach a separate sheet if necessary.",
      navigations: ["Previous page", "Next page"],
      Component: () => (
        <Step8 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["Previous page", "Next page"],
      Component: () => (
        <Step9 state={state} onChange={onChange} errors={errors} />
      ),
    },
    {
      navigations: ["Previous page", "Submit"],
      Component: () => (
        <Step10 state={state} onChange={onChange} errors={errors} />
      ),
    },
  ];
  return (
    <Layout>
      <Stepper
        currentStep={step}
        setStep={changeStep}
        steps={steps}
        onSubmit={onSubmit}
      />
    </Layout>
  );
};

export default App;
