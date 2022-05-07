import React from "react";

const MyCustomCom = (props) => {
  if (props.type === "p") {
    return <p style={{ color: props.color }}>{props.title}</p>;
  }
  return  <h1 style={{ color: props.color }}>{props.title}</h1>;
};
export default MyCustomCom;
