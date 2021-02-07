import React from "react";
import Wrapper, { Step1 } from "./styles";
import { Select, Form } from "semantic-ui-react";
const options = [
  { key: "all", text: "All", value: "all" },
  { key: "articles", text: "Articles", value: "articles" },
  { key: "products", text: "Products", value: "products" },
];
export const Index = (props) => {
  const { onChange, state, errors } = props;
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field>
            <label className="lg">What type of business?</label>
            <Select
              compact
              options={options}
              defaultValue={state["businessType"]}
              icon="angle down"
              onChange={(e, target) =>
                onChange && onChange("businessType", target.value)
              }
            />
            {errors && errors.businessType && (
              <span className="error">This field is required.</span>
            )}
          </Form.Field>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
