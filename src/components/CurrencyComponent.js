import React, { useState } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState('');
  const [borderColor, setborderColor] = useState('border-red-400');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setborderColor('border-green-400');

    try {
      const response = await fetch(`/api/currency`);

      if (response.ok) {
        const data = await response.json();
        const rate = data.rates[currency.toUpperCase()];

        if (rate !== undefined) {
          setResult(`1 USD es igual a $ ${rate.toFixed(2)} ${currency}.`);
        } else {
          setResult('Moneda no válida.');
          setborderColor('border-red-400');
        }
      } else {
        setResult('Error al obtener datos de la API.');
      }
    } catch (error) {
      console.log('Error:', error);
      setResult('Error al obtener datos de la API.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="currency"
          className="mr-2 bg-amber-200 px-1 py-1 text-black font-semibold"
        >
          Ingresa una moneda (por ejemplo: ARS, EUR, GBP):
        </label>
        <input
          type="text"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="text-black uppercase font-semibold"
        />
        <button
          type="submit"
          className="rounded px-4 py-2 mx-3 my-4 outline-2 outline-amber-400 outline-offset-[3px] outline-double bg-gray-800 hover:brightness-150"
        >
          Convertir
        </button>
      </form>
      <div
        id="result"
        className={`xl:justify-center xl:flex xl:m-auto bg-gray-800 px-1 my-2 w-fit border-l-4 ${borderColor}`}
      >
        {result}
      </div>
    </div>
  );
}
