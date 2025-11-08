import { FacebookLogo, InstagramLogo } from "phosphor-react";

export const SocialMidia = () => {
  return (
    <>
      <section className="social-media max-w-50% m-8 bg-emerald-400 p-50 rounded-lg shadow-md">
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#333",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Nossas Redes Sociais
        </h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li>
            <FacebookLogo size={32} />
            <a
              href="https://www.facebook.com/empresa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#333",
                fontSize: "1rem",
                margin: "0 10px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            ></a>
          </li>
          <li>
            <InstagramLogo size={32} />
            <a
              href="https://twitter.com/empresa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#333",
                fontSize: "1rem",
                margin: "0 10px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            ></a>
          </li>
          <li>
            <InstagramLogo size={32} />
            <a
              href="https://www.instagram.com/empresa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#333",
                fontSize: "1rem",
                margin: "0 10px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            ></a>
          </li>
        </ul>
      </section>
    </>
  );
};
