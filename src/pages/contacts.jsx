import { Mensagem } from "../components/chatboox/mensege";
import { Detalhes } from "../components/detalhes/nossos-detlh";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Location } from "../components/location/location";
import { SocialMidia } from "../components/social-midea/social-midia";

export const Contacts = () => {
  return (
    <>
      <Header />

      <main
        style={{
          background: "black",
          
        
          padding: "20px",
        }}
      >
        <div style={{ flexDirection: "column",  alignItems: "center",justifyContent: "center", gap: "20px" }}>
          <Detalhes />
          <Mensagem />
          <Location />
          <SocialMidia />
        </div>
      </main>
      <Footer />
    </>
  );
};
