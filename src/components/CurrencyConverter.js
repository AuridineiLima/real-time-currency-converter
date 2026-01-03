import { useState } from "react";

function CurrencyConverter({ dollarRate, euroRate }) {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);

  function handleConvert() {
    if (!value) return;

    let rate = 0;

    if (currency === "USD") {
      rate = dollarRate;
    }

    if (currency === "EUR") {
      rate = euroRate;
    }

    if (!rate) return;

    const convertedValue = Number(value) * Number(rate);
    setResult(convertedValue);
  }

  function handleClear() {
    setValue("");
    setCurrency("USD");
    setResult(null);
  }

  return (
    <div className="converter-box">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Valor"
      />

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <button onClick={handleConvert}>Converter</button>
      <button onClick={handleClear}>Limpar</button>

      {result !== null && (
        <p>
          Resultado:{" "}
          <strong>
            R${" "}
            {result.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
