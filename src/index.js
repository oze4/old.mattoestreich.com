import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

const mountEl = document.getElementById("root");
render(<App />, mountEl);
