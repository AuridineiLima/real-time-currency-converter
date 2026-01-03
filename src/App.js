import { useEffect, useState } from "react";
import {
  getDollarRate,
  getEuroRate,
} from "./services/exchangeRateService";
import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {
  const [dollarRate, setDollarRate] = useState(null);
  const [euroRate, setEuroRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        const usd = await getDollarRate();
        const eur = await getEuroRate();

        setDollarRate(usd);
        setEuroRate(eur);
      } catch (err) {
        setError("Erro ao carregar cotação");
      }
    }

    fetchRates();
  }, []);

  return (
    <div className="converter-container">
      <h1 className="converter-title">Conversor de Moedas</h1>

      {error && <p className="error-text">{error}</p>}

      {!error && dollarRate && euroRate && (
        <p>
          Cotação atual:
          <br />
          <strong>1 USD = R$ {dollarRate}</strong>
          <br />
          <strong>1 EUR = R$ {euroRate}</strong>
        </p>
      )}

      <CurrencyConverter
        dollarRate={dollarRate}
        euroRate={euroRate}
      />
    </div>
  );
}

export default App;
