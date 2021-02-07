import React, { useEffect, useState } from "react";
import { Button, Progress, Grid, Image, Header } from "semantic-ui-react";
import Stepper, { Head, Navigation, Steps } from "./styles";
import arrow from "../../assets/images/icons/Arrowleft.svg";

const Index = (props) => {
  const { currentStep, onSubmit, setStep, steps } = props;
  const [step, changeStep] = useState(0);
  useEffect(() => {
    changeStep(currentStep);
  }, [currentStep]);

  const prev = () => {
    if (step > 0) {
      (setStep && setStep(step - 1)) || changeStep(step - 1);
    }
  };
  const next = () => {
    if (step < ((steps && steps.length - 1) || 5)) {
      if (setStep) {
        setStep(step + 1);
      } else {
        changeStep(step + 1);
      }
    } else {
      (onSubmit && onSubmit()) || alert("submitted");
    }
  };

  const { navigations, Component, title } = (steps && steps[step]) || {
    navigations: ["Back", "Next"],
    Component: () => <Header as="h3">Step {step + 1}</Header>,
  };

  return (
    <Stepper>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column width="16">
            <Button disabled={step === 0} className="btn-back" onClick={prev}>
              <Image src={arrow} /> back
            </Button>
            <Head>
              <Progress
                percent={(step / (steps.length - 1 || 5)) * 100}
                className="step-progress"
              />
            </Head>
          </Grid.Column>
          <Grid.Column width="16">
            <Header as="h3" className="heading">
              Paycheck Protection Program Borrower Application
            </Header>
            <Steps>
              {title && (
                <Header as="h5" className="title">
                  List all owners of 20% or more of the equity of the applicant.
                  Attach a separate sheet if necessary.
                </Header>
              )}
              {Component ? <Component /> : ""}
            </Steps>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Navigation>
        {navigations.map((nav, index) => {
          let back = navigations.length > 1 && index === 0;
          return (
            <Button
              key={nav}
              className={back ? "ghost" : ""}
              onClick={() => {
                back ? prev() : next();
              }}
            >
              {nav}
            </Button>
          );
        })}
      </Navigation>
    </Stepper>
  );
};

export default Index;
