import React from "react";
import { Footer } from "./styles";
import {
  Grid,
  Container,
  Image,
  Menu,
  Divider,
  Icon,
  Header,
} from "semantic-ui-react";
import logo from "../assets/images/logo.png";

const links = ["Resources", "Company", "Contact Us", "About", "Legal"];

const Index = () => {
  return (
    <Footer>
      <Container>
        <div>
          <Grid columns={2}>
            <Grid.Column floated="left" width="4">
              <Image src={logo} />
            </Grid.Column>
            <Grid.Column floated="left" width="12">
              <Menu secondary className="navigation-menu">
                <Menu.Menu position="right">
                  {links.map((link) => (
                    <Menu.Item name={link} key={link} />
                  ))}
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid>
        </div>
        <Divider className="divider-spacing"></Divider>
        <Grid>
          <Grid>
            <Grid.Column columns={16} className="pv-40">
              <div>
                <Header as="h2" className="ma-0">
                  We were Created For Enterpreneurs By Enterpreneurs
                </Header>
                <Header as="h6" className="mt-17">
                  One West, a small business financing company, is committed to
                  helping small businesses succeed. Unlike traditional banks, we
                  believe that business owners should be able to get working
                  capital quickly based on the strength of their business, not
                  on their personal credit score. Many business owners don't
                  have the time to go to traditional banks and "hope" to get a
                  business loan. One West was started with the concept that
                  access to working capital doesn't need to be complicated and
                  stressful for business owners. We utilize new technologies to
                  evaluate your business performance in real-time and to
                  simplify the application experience. This allows us to approve
                  more applicants in a shorter period of time and provide small
                  business financing within days, not weeks or months like
                  traditional banks. As a responsible lender, we´re committed to
                  help small businesses succeed financially to drive long term
                  growth.
                </Header>
              </div>
            </Grid.Column>
          </Grid>
          <div className="social-icons">
            <Divider horizontal>
              <Header as="h4">
                <Icon name="twitter" />
                <Icon name="facebook f" />
                <Icon name="instagram" />
              </Header>
            </Divider>
          </div>
        </Grid>
      </Container>
    </Footer>
  );
};

export default Index;
