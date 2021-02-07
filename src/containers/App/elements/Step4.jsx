import React from "react";
import Wrapper, { Step1 } from "./styles";
import { Form } from "semantic-ui-react";

export const Index = () => {
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field className="form-group">
            <label>Business TIN (EIN, SSN) *</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group">
            <label>Business Phone*</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group mb-0">
            <label>Average Monthly Payroll *</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
