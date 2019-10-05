import React, { useState } from "react";

export default ({
  elementsToRemove = [],
  elementsToKeep = [],
  elementsToAppear = []
}) => {
  const [step, setStep] = useState(0);

  const elementsToRender = [
    ...elementsToRemove.slice(step, elementsToRemove.length),
    ...elementsToAppear.slice(0, step)
  ];

  window.addEventListener("keydown", () => setStep(0));

  return (
    <div onClick={() => setStep(step => step + 1)}>
      {elementsToKeep || null}
      {elementsToRender || null}
    </div>
  );
};
