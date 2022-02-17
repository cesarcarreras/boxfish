import React from "react";
import { Navbar, Card, Footer } from "./components";
import { getData } from "./services/user-info";

export const App = () => {
     getData()
  return (
    <>
      <Navbar />
      <Card />
      <Footer />
    </>
  );
};
