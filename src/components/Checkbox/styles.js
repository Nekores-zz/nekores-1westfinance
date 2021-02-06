import styled from "styled-components";

export default styled.div`
  position: relative;
  display: flex;
  align-items: center;
  .custom-checkbox {
    position: relative;
    background: ${(props) => (props.checked ? "#fff" : "transparent")};
    border: 1px solid #07367b;
    box-sizing: border-box;
    border-radius: 2px;
    height: 16px;
    width: 16px;
    top: 2px;
  }
  .custom-check {
    display: ${(props) => (props.checked ? "block" : "none")};
    position: absolute;
    left: 3px;
    top: 3px;
  }
  .custom-label {
    margin-left: 10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #07367b;
  }
`;
