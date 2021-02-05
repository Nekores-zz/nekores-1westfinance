import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Wrapper from "./styles";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
