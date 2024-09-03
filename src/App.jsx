import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import {formatearDinero, calcularTotalPagar} from './helpers'

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);

  }, [cantidad, meses, total]);

  useEffect(() => {
    setPago(total / meses);
  }, [total, meses]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if(valor < MIN) {
      alert('cantidad no valida');
      return;
    }

    setCantidad(valor);
  }
  function handleClickincremento() {
    const valor = cantidad + STEP;

    if(valor > MAX) {
      alert('cantidad no valida');
      return;
    }

    setCantidad(valor);
  }


  return (
      <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
          <Header />

          <div className='flex justify-between my-6'>
            <Button 
              operador='-'
              fn={handleClickDecremento}
            />
            <Button 
              operador='+'
              fn={handleClickincremento}
            />
              
          </div>

          <input 
            type='range'
            className='w-full h-6 bg-blue-400 accent-blue-600 hover:accent-blue-400'
            onChange={handleChange}
            min={MIN}
            max={MAX}
            step={STEP}
            value={cantidad}
          />

          <p className='text-center my-10 text-5xl font-extrabold text-blue-600'>
            { formatearDinero( cantidad )}
            </p>

            <h2 className='text-2xl font-extrabold text-slate-900 text-center'>
                Elige un <span className='text-blue-600'>Plazo </span> a pagar
            </h2>

            <select
              className='mt-5 w-full p-2 bg-white border border-blue-600 rounded-lg text-center text-xl font-bold text-blue-950'
              value={meses}
              onChange={ e => setMeses(+e.target.value)}
            >
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
            </select> 

            <div className='my-5 space-y-3 bg-blue-50 p-5'>
              <h2 className='text-2xl font-extrabold text-slate-900 text-center'>
                  Resumen <span className='text-blue-600'>de pagos </span>
              </h2>

              <p className='text-xl text-blue-950 text-center font-bold'>{meses} Meses</p>
              <p className='text-xl text-blue-950 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
              <p className='text-xl text-blue-950 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
            </div>


          </div>
  )
}

export default App
