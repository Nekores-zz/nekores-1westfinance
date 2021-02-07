import React from "react";
import { Header } from "./styles";
import { Image } from "semantic-ui-react";
import logo from "../assets/images/logo.png";
import phone from "../assets/images/icons/phone.svg";

const Index = () => {
  return (
    <Header>
      <div className="logo">
        <Image src={logo} />
        <div className="phone">
          <Image src={phone} />
          <a href="#">
            <span>(888) 881-9378</span>
          </a>
        </div>
      </div>
    </Header>
  );
};

export default Index;
