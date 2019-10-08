import React from "react";
import "./styles.css";

export default ({ children, percent = false }) => {
  return (
    <div
      className={percent ? "codeSurferContainerPercent" : "codeSurferContainer"}
    >
      {children}
    </div>
  );
};
