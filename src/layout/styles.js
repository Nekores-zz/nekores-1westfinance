import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export default styled.div`
  background-color: #eef7ff;
  min-height: 100vh;
  .pa-0 {
    padding: 0;
  }
  .pv-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .ph-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .pv-40 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
  .ma-0 {
    margin: 0 !important;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .mt-17 {
    margin-top: 17px;
  }
  .ml-20 {
    margin-left: 20px;
  }
  .mb-10 {
    margin-bottom: 10px;
  }
  .mb-40 {
    margin-bottom: 40px !important;
  }
  .cursor {
    cursor: pointer !important;
  }
`;

export const Header = styled(Grid.Column)`
  padding-top: 40px;
  padding-bottom: 55px;
  position: relative;
  height: fit-content;
  justify-content: center;
  display: flex;
  .logo {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    img {
      margin: 0 auto;
    }
    .phone {
      position: absolute;
      width: 140px;
      left: calc(100% + 90px);
      top: 7px;
      span {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        text-transform: capitalize;
        color: #26aae1;
      }
      img {
        display: inline;
        margin-right: 10px;
      }
    }
    @media (max-width: 767px) {
      text-align: center;
      .phone {
        width: 100%;
        position: relative;
        left: 0;
      }
    }
  }
`;
export const Banner = styled.div`
  background: #eef7ff;
  padding-top: 100px;
  padding-bottom: 100px;
  border-bottom: 1px solid #333333;
  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  h6.ui.header {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 33px;
    color: #000000;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 40px;
    text-align: center;
  }
  .sponsers {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: inline;
      margin: 0 20px;
      padding: 0;
      max-width: 162px;
      min-width: 20px;
    }
  }
`;

export const Footer = styled.div`
  background: #fff;
  padding: 40px 0 60px 0;
  .right.menu .item {
    margin: 0;
    padding: 0 15px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
  }
  .divider-spacing {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-top: 20px;
    }
  }
  .navigation-menu {
    min-height: auto;
  }
  @media (max-width: 767px) {
    .ui.menu:not(.vertical).navigation-menu {
      min-height: auto;
      width: fit-content;
      text-align: left;

      .right.menu {
        display: block;
        .item {
          margin: 10px 0;
        }
      }
    }
  }
  .social-icons {
    width: 100%;
    i {
      width: 24px;
      padding: 0 18px;
    }
    .icons {
      width: 108px;
    }
  }
  h2.ui.header {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    text-transform: capitalize;
  }
  h6.ui.header {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #666666;
  }
`;
export const Main = styled(Grid.Column)``;
