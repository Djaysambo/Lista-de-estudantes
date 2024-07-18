export const Location=()=>{
    return(
        <>
       <section className="map" style={{ maxWidth: '100%', marginBottom: '30px', background: 'aqua', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px', textAlign: 'center' }}>Localização</h2>
          <div className="map-placeholder" style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem' }}>Mapa Interativo Aqui</p>
          </div>
        </section>

        </>

    );
};