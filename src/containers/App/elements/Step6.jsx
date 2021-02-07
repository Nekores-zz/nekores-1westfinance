import React from "react";
import Wrapper, { Step1 } from "./styles";
import { Form } from "semantic-ui-react";

export const Index = () => {
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field className="form-group">
            <label>Primary Contact*</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group">
            <label>Primary Email*</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group mb-0">
            <label>Number of Employees*</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
