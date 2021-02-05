import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Banner from "./Banner";
import Wrapper from "./styles";
import { Grid, Container } from "semantic-ui-react";

const Layout = (props) => {
  return (
    <Wrapper>
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Header />
            <Main>{props.children}</Main>
          </Grid.Row>
        </Grid>
      </Container>
      <Banner></Banner>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Layout;
