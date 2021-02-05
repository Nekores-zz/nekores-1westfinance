import React from "react";
import { Banner } from "./styles";
import {
  Grid,
  Container,
  Image,
  Menu,
  Divider,
  Icon,
  Header,
} from "semantic-ui-react";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";

const links = ["Resources", "Company", "Contact Us", "About", "Legal"];

const Index = () => {
  return (
    <Banner>
      <Container>
        <div>
          <Grid columns>
            <Grid.Column width="16">
              <Header as="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                cursus sit nisi, eleifend ipsum pharetra.{" "}
              </Header>
              <div className="sponsers">
                <Image src={one} />
                <Image src={two} />
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
    </Banner>
  );
};

export default Index;
