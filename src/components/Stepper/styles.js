import styled from "styled-components";

export default styled.div`
  position: relative;
  width: 100%;
  .btn-back {
    font-family: Open Sans;
    font-weight: 300;
    img {
      display: inline;
      margin-right: 5px;
    }
    position: absolute;
    background: transparent !important;
    padding: 0;
    color: #666666;
  }
  .column {
    min-height: 0;
  }
  h3.ui.heading {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #07367b;
    text-align: center;
  }
`;
export const Head = styled.div`
  width: 70%;
  max-width: 690px;
  @media (max-width: 767px) {
    width: 60%;
  }

  margin: 0 auto;
  .step-progress.ui.progress .bar {
    height: 10px;
    background: #07367b;
  }
  .step-progress.ui.progress {
  }
  .step-progress.ui.progress,
  .step-progress.ui.progress,
  .bar {
    border-radius: 3px;
    margin-bottom: 25px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  button.ui.button {
    height: 44px;
    width: 216px;
    line-height: 44px;
    border-radius: 10px;
    box-shadow: 0px 15px 20px rgba(100, 225, 41, 0.1);
    border: 1px solid #64e129;
    background: #64e129;
    color: white;
    margin: 0 10px;
    padding: 0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
  button.ghost.ui.button {
    background: transparent;
    color: #64e129;
  }
`;
export const Steps = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
  margin-top: 40px;
  h5.ui.header.title {
    display: block;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    margin: 0;
    color: #333333;
    text-align: center;
  }
`;
