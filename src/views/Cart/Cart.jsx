import { ContextApplication } from '../../context/context'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const { teste, setTeste } = useContext(ContextApplication)

  return (
    <div>
      <p>{teste}</p>
      <button onClick={() => setTeste(2)}>Teste</button>
      <Link to="/"><button onClick={() => setTeste(2)}>Produtos</button></Link>
    </div>
  )
}

export default Cart