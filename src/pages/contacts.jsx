import { Mensagem } from "../components/chatboox/mensege";
import { Detalhes } from "../components/detalhes/nossos-detlh";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import { SocialMidia } from "../components/social-midea/social-midia";

export const Contacts = () => {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "wrap",
            padding: "20px",
          }}
        >
          <div>
            <Mensagem />
          </div>
          <div>
            <Detalhes />
          </div>
        </div>

        <div>
          {" "}
          <SocialMidia />
        </div>
      </main>

      <Footer />
    </>
  );
};
