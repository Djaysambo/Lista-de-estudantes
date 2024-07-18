import { Link, useSearchParams } from "react-router-dom";
import { Info, Plus } from "phosphor-react";


import { Header } from "../components/header/header";
import { users } from "../data/users";
import Footer from "../components/footer/footer";
import Filter from "../components/filtre/filtre";







export const users = () => {
  const { cart, addToUsers, removeFromUsers } = useContext(ShoppingCartContext);
  let total = 0;
  function handleAddToCart(id) {
    const product = products.find((users) => user.id === id);
    addToCart(product);
  }

  return (
    <main>
      Nomes nalista:{" "}
      <span style={{ fontWeight: "bold" }}>{cart.length}</span>
      <section>
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              style={{ border: "1px solid black", margin: "4px" }}
            >
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product.id)}>
                Adicionar a carrinha
              </button>
            </div>
          ))}
        </div>
        <nav>
          <h2>Produtos na carrinha</h2>
          {cart.map((cartItem) => {
            total += cartItem.price;

            return (
              <div key={cartItem.id}>
                <h3>{cartItem.name}</h3>
                <p>
                  Preço: <span>{cartItem.price}</span>
                </p>
                <button style={{ backgroundColor: "red" }}>Eliminar</button>
              </div>
            );
          })}
          <div>
            <h1>Tota: {total.toFixed(2)} MT</h1>
          </div>
        </nav>
      </section>
    </main>
  );
}

  return (
    <>
      <Header />
      <main style={{ display: 'flex',background:"black" , justifyContent: 'center', alignItems: 'flex-start', padding: '20px' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        
        <Filter/>
          <h1 className="">Lista de usuários</h1>
        </div>

         </div>
       
     
        
    
    </main>
    <Footer/>
    </>
  );
};
