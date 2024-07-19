export const Detalhes=()=>{
    return(
        <>
        <section  style={{ maxWidth: '50%', marginBottom: '32px', background: 'aqua', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px', textAlign: 'center' }}>Nossos Detalhes de Contato</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
            <strong>Nome da Empresa</strong><br />
            Endereço da Empresa, Cidade, Maputo<br />
            Telefone: (+258) 87 242 0114<br />
            E-mail Geral: vicentesambo3@.com<br />
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
            <strong>Horário de Funcionamento:</strong><br />
            Segunda a Sexta: 9:00 - 18:00<br />
            Sábado e Domingo: Fechado
          </p>
        </section>
        </>

    );
};