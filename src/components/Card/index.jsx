import React from "react";
import { Card, Icon, Form } from "semantic-ui-react";

const Index = () => (
  <Card>
    <Card.Content>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>
    </Card.Content>
  </Card>
);

export default Index;
