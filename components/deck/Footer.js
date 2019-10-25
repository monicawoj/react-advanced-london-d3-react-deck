import React from "react";
import { colors } from "components/deck/theme";

import "./style.css";

const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "120px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: "0",
        left: "0",
        textAlign: "right",
        borderTop: `1px solid ${colors.secondary}`,
        padding: "1em",
        color: colors.grey
      }}
    >
      <div>React Advanced London 2019</div>

      <a
        href="https://www.reflectingreason.com/"
        target="_blank"
        className="aboutMeLink"
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div>@monica_woj</div>
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundSize: "contain",
              backgroundImage:
                "url(./images/reflecting-reason-logo.svg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>
      </a>
    </div>
  );
};

export default Footer;
