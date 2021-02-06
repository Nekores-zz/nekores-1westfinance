import React from "react";
import Wrapper, { Step1 } from "./styles";
import { Select, Form } from "semantic-ui-react";
const options = [
  { key: "all", text: "All", value: "all" },
  { key: "articles", text: "Articles", value: "articles" },
  { key: "products", text: "Products", value: "products" },
];
export const Index = () => {
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field className="form-group">
            <label>City *</label>
            <input placeholder="" />
          </Form.Field>
          <div class="error"></div>
          <Form.Field>
            <label>State *</label>
            <Select
              compact
              options={options}
              defaultValue="articles"
              icon="angle down"
            />
          </Form.Field>
          <div class="error"></div>

          <Form.Field className="form-group mb-0">
            <label>Zip *</label>
            <input placeholder="" />
          </Form.Field>
          <div class="error"></div>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
