import React, { useState } from "react";
import Button from "@material/react-button";
import TextField, { HelperText, Input } from "@material/react-text-field";
import { Overline, Headline2 } from "@material/react-typography";

import NotBoringKeyboard from "../NotBoringKeyboard";

import "@material/react-text-field/dist/text-field.css";
import "@material/react-button/dist/button.min.css";
import "@material/react-material-icon/dist/material-icon.css";
import "@material/react-typography/dist/typography.css";
import "./App.css";

// TODO: reset should animate transition out

const App = () => {
  const [xAxisType, setXAxisType] = useState("QWERTY");
  const [yAxisType, setYAxisType] = useState("SCATTERED");
  const [userInput, setUserInput] = useState("");

  const resetData = () => {
    setUserInput("");
  };

  return (
    <div className="App-body">
      <Overline>
        Nordic.JS 2019 - Monica Wojciechowska - "Hooked on D3"
      </Overline>
      <Headline2>The Not-Boring KeyBoard</Headline2>
      <div className="container">
        <TextField
          textarea
          fullWidth
          onTrailingIconSelect={resetData}
          helperText={
            <HelperText>
              Add some letters, see some pretty animation!
            </HelperText>
          }
        >
          <Input
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
        </TextField>

        <div className="buttonContainer">
          <Button onClick={resetData} className="button">
            Reset
          </Button>
          {"|"}
          <Button
            className="button"
            onClick={() =>
              setXAxisType(xAxisType === "QWERTY" ? "A-Z" : "QWERTY")
            }
          >
            Change x-axis to {xAxisType === "QWERTY" ? "A-Z" : "QWERTY"}?
          </Button>
          {"|"}
          <Button
            className="button"
            onClick={() =>
              setYAxisType(
                yAxisType === "SCATTERED" ? "CONDENSED" : "SCATTERED"
              )
            }
          >
            Change y-axis to{" "}
            {yAxisType === "SCATTERED" ? "CONDENSED" : "SCATTERED"}?
          </Button>
        </div>
        <NotBoringKeyboard
          xAxisType={xAxisType}
          yAxisType={yAxisType}
          userInput={userInput}
        />
      </div>
    </div>
  );
};

export default App;
