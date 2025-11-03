import React from "react";
import { Header } from "../components/header/header";
import { Gradient } from "phosphor-react";
import Footer from "../components/footer/footer";

export const About = () => {
  return (
    <>
      <Header />
      <main
        style={{
          background: "linear-gradient(45deg, #2c3f71ff, #4ca1afff)",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          about
        </div>
      </main>
      <Footer />
    </>
  );
};
