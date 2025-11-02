import React from "react";
import { Header } from "../components/header/header";
import { Gradient } from "phosphor-react";

export const About = () => {
  return (
    <>
      <Header />
      <div
        style={{
          background: "linear-gradient(45deg, #2c3f71ff, #4ca1afff)",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        about
      </div>
    </>
  );
};
