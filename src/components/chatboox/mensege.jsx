export const Mensagem = () => {
  return (
    <>
      <section className="contact-form max-w-50% m-8 bg-emerald-400 p-50 rounded-lg shadow-md bg-red-200">
        <h2>Envie uma Mensagem</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label
            htmlFor="name"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "#333" }}
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />

          <label
            htmlFor="email"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "#333" }}
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          />

          <label
            htmlFor="message"
            style={{ fontSize: "1rem", marginBottom: "5px", color: "#333" }}
          >
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "1rem",
              height: "100px",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: "#ff006e",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              border: "1px solid black",
            }}
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
};
