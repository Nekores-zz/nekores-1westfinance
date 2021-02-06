import React from "react";
import Layout from "../../layout";
import Step1 from "./elements/Step1";
import Step2 from "./elements/Step2";
import Step3 from "./elements/Step3";
import Step4 from "./elements/Step4";
import Step5 from "./elements/Step5";
import Step6 from "./elements/Step6";
import Step7 from "./elements/Step7";
import Stepper from "../../components/Stepper";

const App = (props) => {
  const steps = [
    {
      navigations: ["continue"],
      Component: () => <Step1 />,
    },
    {
      navigations: ["continue"],
      Component: () => <Step2 />,
    },
    {
      navigations: ["continue"],
      Component: () => <Step3 />,
    },
    {
      navigations: ["continue"],
      Component: () => <Step4 />,
    },
    {
      navigations: ["continue"],
      Component: () => <Step5 />,
    },
    {
      navigations: ["continue"],
      Component: () => <Step6 />,
    },
    {
      navigations: ["Next page"],
      Component: () => <Step7 />,
    },
  ];
  return (
    <Layout>
      <Stepper steps={steps}></Stepper>
    </Layout>
  );
};

export default App;
