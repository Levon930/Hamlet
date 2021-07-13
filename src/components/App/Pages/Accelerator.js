import React, { useContext } from "react";
import { Context } from "../../../context";

import shutov from "../../../static/img/Բիզնեսը դու ես-1.svg";
import RuShutov from "../../../static/img/RuShutov.svg"

const Accelerator = () => {
   const { lang } = useContext(Context);


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
      <img src={lang === 'am-AM' ? shutov : lang === 'ru-RU' ? RuShutov : ''} alt="shutov" style={{ width: "90%", padding: "100px" }} />
    </div>
  );
};

export default Accelerator;
