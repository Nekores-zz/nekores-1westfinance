import React, { useRef, useState } from "react";
import Wrapper, { Step1 } from "./styles";
import { Form, Button } from "semantic-ui-react";

export const Index = () => {
  const [state, setState] = useState("");
  const fileInputRef = useRef();
  const fileChange = (e) => {
    setState(e.target.files[0]);
  };
  return (
    <Step1>
      <Wrapper>
        <Form>
          <Form.Field>
            <label className="lg">Documents</label>
          </Form.Field>
          <Form.Field className="form-group">
            <label>2019 Proof of Payroll Cost</label>
            <Button
              className="fileUpload"
              content="Choose File"
              onClick={() => fileInputRef.current.click()}
            />
            <span className="fileLable">
              {(state && state.name) || "No file selected"}
            </span>
            <input
              className="fileInput"
              ref={fileInputRef}
              type="file"
              hidden
              onChange={fileChange}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label>Voided Check</label>
            <Button
              className="fileUpload"
              content="Choose File"
              onClick={() => fileInputRef.current.click()}
            />
            <span className="fileLable">
              {(state && state.name) || "No file selected"}
            </span>
            <input
              className="fileInput"
              ref={fileInputRef}
              type="file"
              hidden
              onChange={fileChange}
            />
          </Form.Field>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
