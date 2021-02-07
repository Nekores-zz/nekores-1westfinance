import styled, { css } from "styled-components";
import { Segment } from "semantic-ui-react";

export default styled.div`
  .form-group.field {
    margin-bottom: 20px;
  }
  .ui.checkbox.radio input {
    display: none;
  }
  .ui.checkbox.radio label {
    padding-left: 26px;
    font-size: 18px;
  }
  .check-label {
    font-size: 18px;
  }
  .ui.checkbox label:after {
    top: 3px;
    background: #07367b;
  }
  .ui.checkbox input:checked ~ label:before {
    border-color: #07367b;
  }
  .ui.checkbox input:checked ~ label:after {
    background: #07367b;
  }
  .ui.checkbox label:before {
    top: 3px;
    border-color: #07367b;
    background-color: transparent;
  }
  .ui.form label {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24.51px;
    color: #07367b;
    margin-bottom: 10px;
    img.ui.image {
      display: inline;
      margin-right: 10px;
    }
  }
  .ui.form label.lg {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #07367b;
    margin-bottom: 15px;
  }

  h5.ui.header {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 20px;
  }
  .ui.form input,
  .ui.form textarea,
  .selection.ui.dropdown {
    position: relative;
    height: 45px;
    display: flex;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    padding-top: 0;
    padding-bottom: 0;
    color: #333333;
    border-radius: 10px;
  }
  .menu .item .text,
  input,
  textarea,
  .selection.ui.dropdown {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
  }
  .selection.ui.dropdown i.icon {
    position: absolute;
    right: 10px;
  }
  .selection.ui.dropdown .text {
    font-weight: 400;
  }
  .error {
    position: absolute;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #e10000;
    margin-top: 4px;
  }
  button.ui.fileUpload {
    width: 193px;
    height: 45px;
    left: 483px;
    top: 505px;
    background: #eef7ff;
    border: 1px solid #dddada;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .form-group .fileLable {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 150%;
    color: #999999;
    margin-left: 20px;
    text-transform: capitalize;
  }
  .fileInput {
    display: none !important;
  }
  h4.ui.header {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 0;
    text-align: center;
  }
`;

export const Step1 = styled(Segment)`
  ${(props) =>
    (props.ghost &&
      css`
        &.ui.segment {
          width: ${props.width || "704px"};
          max-width: ${props.width || "704px"};
          padding: 0 70px 0px;
          background: transparent;
          box-shadow: 0px 4px 6px transparent;
          border: none;
          border-radius: 10px;
          @media (max-width: 767px) {
            padding: 0 30px 0;
          }
        }
      `) ||
    css`
      &.ui.segment {
        max-width: ${props.maxWidth || "513px"};
        width: ${props.width || "513px"};
        padding: 30px 70px 70px;
        847 376272
        background: #ffffff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        @media(max-width: 767px){
            padding: 30px 30px 50px;
        }
      }
    `}
`;

export const CheckboxField = styled.div`
  margin-bottom: 20px;
`;
