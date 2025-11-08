export const Detalhes = () => {
  return (
    <>
      <section className="contact-details max-w-50% m-8 bg-emerald-400 p-50 rounded-lg shadow-md text-center">
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#333",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Nossos Detalhes de Contato
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
          <strong>Nome da Empresa</strong>
          <br />
          Endereço da Empresa, Cidade, Maputo
          <br />
          Telefone: (+258) 87 242 0114
          <br />
          E-mail Geral: vicentesambo3@.com
          <br />
        </p>
        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.6" }}>
          <strong>Horário de Funcionamento:</strong>
          <br />
          Segunda a Sexta: 9:00 - 18:00
          <br />
          Sábado e Domingo: Fechado
        </p>
      </section>
    </>
  );
};
