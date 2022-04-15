import { ContextApplication } from '../../context/context'
import React,{ useContext } from 'react';

function Cart() {
  const { teste, setTeste } = useContext(ContextApplication)

  return (
    <div>
      <p>{teste}</p>
      <button onClick={() => setTeste(2)}>Teste</button>
    </div>
  )
}

export default Cart