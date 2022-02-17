import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);