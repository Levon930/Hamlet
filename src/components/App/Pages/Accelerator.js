import React from "react";
import shutov from "../../../static/img/Բիզնեսը դու ես-1.svg";

const Accelerator = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img src={shutov} style={{ width: "90%", padding: "100px" }} />
    </div>
  );
};

export default Accelerator;
