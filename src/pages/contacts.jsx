import { Mensagem } from "../components/chatboox/mensege";
import { Detalhes } from "../components/detalhes/nossos-detlh";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/header";
import { SocialMidia } from "../components/social-midea/social-midia";

export const Contacts = () => {
  return (
    <>
      <Header />
      <main className="">
        <div >
          <Detalhes />
        <Mensagem />
        <SocialMidia />
        </div>
      </main>

      <Footer />
    </>
  );
};
