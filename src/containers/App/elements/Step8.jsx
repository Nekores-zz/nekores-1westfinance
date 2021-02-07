import React, { useRef, useState } from "react";
import Wrapper, { Step1 } from "./styles";
import { Form, Grid, Button, Image } from "semantic-ui-react";
import add from "../../../assets/images/icons/add.svg";

export const Index = () => {
  const [state, setState] = useState("");
  const fileInputRef = useRef();
  const fileChange = (e) => {
    setState(e.target.files[0]);
  };
  return (
    <Step1 maxWidth="927px" width="927px">
      <Wrapper>
        <Form>
          <Grid>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>First Name *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Last Name *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Title*</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Ownership% *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Email *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>SSN *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Street Address *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>City *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>State *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Zip Code *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Phone *</label>
                <input placeholder="" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label>Drivers License</label>
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
            </Grid.Column>
            <Grid.Column width="8" mobile="16" tablet="16" largeScreen="8">
              <Form.Field className="form-group">
                <label className="cursor">
                  <Image src={add} /> Add another owner
                </label>
              </Form.Field>
            </Grid.Column>
          </Grid>
          <div className="error"></div>
        </Form>
      </Wrapper>
    </Step1>
  );
};
export default Index;
