import React from "react";
import Wrapper, { Step1 } from "./styles";
import { Form } from "semantic-ui-react";

export const Index = () => {
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field className="form-group">
            <label>Business Legal Name *?</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>
          <Form.Field className="form-group">
            <label>DBA or Tradename</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group">
            <label>Street Address *</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>

          <Form.Field className="form-group mb-0">
            <label> Suite Number</label>
            <input placeholder="" />
          </Form.Field>
          <div className="error"></div>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
