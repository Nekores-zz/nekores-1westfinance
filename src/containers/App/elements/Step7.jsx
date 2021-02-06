import React from "react";
import Wrapper, { Step1, CheckboxField } from "./styles";
import { Form, Header, TextArea } from "semantic-ui-react";
import Checkbox from "../../../components/Checkbox";

export const Index = () => {
  return (
    <Step1 ghost>
      <Wrapper>
        <Form>
          <Header as="h5">Purpose of the Loan</Header>
          <CheckboxField>
            <Checkbox label="Payroll" />
          </CheckboxField>
          <CheckboxField>
            <Checkbox label="Lease / Mortgage Interest" />
          </CheckboxField>
          <CheckboxField>
            <Checkbox label="Utilities" />
          </CheckboxField>
          <CheckboxField>
            <Checkbox label="Other (explain)" />
          </CheckboxField>
          <Form.Field className="form-group mb-0">
            <label>Other (explanation)*</label>
            <TextArea rows={1} placeholder="" />
          </Form.Field>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
