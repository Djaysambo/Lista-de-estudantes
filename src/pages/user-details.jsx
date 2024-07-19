import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";

import { useParams } from "react-router-dom";

export const UserDatails = () => {
  const params = useParams();

  return (
    <>
      <Header />
      <main>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "500px",
          }}
        >
          <h1>
            Olá,{" "}
            {params.username.split("-")[0].charAt(0).toUpperCase() +
              params.username.split("-")[0].slice(1)}{" "}
            {params.username.split("-")[1].charAt(0).toUpperCase() +
              params.username.split("-")[1].slice(1)}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              ullam harum perferendis, veniam quidem ducimus laboriosam dolorem
              autem repellat facilis distinctio, consequuntur similique. Sequi
              saepe architecto corrupti debitis! Facilis, possimus?
            </p>
            .
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};
