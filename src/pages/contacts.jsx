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

      <main style={{ background: "black", flexDirection: 'column', alignItems: "center", padding: '20px' }}>
        <Detalhes/>
        <Mensagem/>
        <Location/>
        <SocialMidia/>
      </main>
      <Footer />

    </>
  );
};
