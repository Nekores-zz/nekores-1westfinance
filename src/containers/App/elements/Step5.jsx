import React, { useState } from "react";
import Wrapper, { Step1 } from "./styles";
import { Form, Header, Radio } from "semantic-ui-react";

export const Index = () => {
  const [checked, setChecked] = useState("yes");
  return (
    <Step1 ghost>
      <Wrapper>
        <Form>
          <Header as="h5">
            Have you previously taken an Economic Injury Disaster Loan (EIDL)?
          </Header>
          <Form.Field className="form-group">
            <Radio
              label="Yes"
              name="radioGroup"
              checked={!checked}
              onChange={() => setChecked(!checked)}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <Radio
              label="No"
              name="radioGroup"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </Form.Field>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
