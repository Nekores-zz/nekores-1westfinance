import React, { useState } from "react";
import Checkbox from "./styles";
import check from "../../assets/images/icons/check.svg";

const Index = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Checkbox onClick={handleChange} checked={checked}>
      <div className="custom-checkbox"></div>
      <div className="custom-check">
        <img src={check} alt="check" />
      </div>
      {props.label && <span className="custom-label">{props.label}</span>}
    </Checkbox>
  );
};

export default Index;
