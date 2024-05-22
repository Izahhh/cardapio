import React, { useState } from 'react';
import './App.css';

function Cardapio() {
  let [hamburger, setHamburger] = useState(0);
  let [hotDog, setHotDog] = useState(0);
  let [refri, setRefri] = useState(0);

  let handleReset = () => {
    setHamburger(0);
    setHotDog(0);
    setRefri(0);
  };

  let total = hamburger * 35 + hotDog * 19 + refri * 5;

  return (
    <div className='container'>
      <div className='cardapio'>C A R D Á P I O</div>
      <div className='container2'>
        <div className='item'>
          <div className='txt'>Hambúrguer - R$35</div>
          <button className='btn' onClick={() => setHamburger(hamburger + 1)}>{hamburger}</button>
        </div>

        <div className='item'>
          <div className='txt'>Hot Dog - R$19</div>
          <button className='btn' onClick={() => setHotDog(hotDog + 1)}>{hotDog}</button>
        </div>

        <div className='item'>
          <div className='txt'>Refrigerante - R$5</div>
          <button className='btn' onClick={() => setRefri(refri + 1)}>{refri}</button>
        </div>

        <div className='total'>Total: R${total.toFixed(2)}</div>
        <button className='btnZ' onClick={handleReset}>Cancelar</button>
      </div>
    </div>
  );
}

export default Cardapio;
