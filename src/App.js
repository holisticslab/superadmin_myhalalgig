import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./route/AppRoute";
import "@fontsource-variable/mulish";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
