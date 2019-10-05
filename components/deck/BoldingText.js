import React, { useState } from "react";

export default () => {
  const [bolded, setBolded] = useState(false);

  return (
    <h2 onClick={() => setBolded(true)}>
      Creating{" "}
      <span style={bolded ? { fontSize: "1.5em", fontWeight: 800 } : {}}>
        Animated
      </span>{" "}
      Charts with D3 and React Hooks
    </h2>
  );
};
