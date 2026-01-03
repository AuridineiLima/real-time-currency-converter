export async function getDollarRate() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  const data = await response.json();
  return Number(data.USDBRL.bid);
}

export async function getEuroRate() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/EUR-BRL"
  );
  const data = await response.json();
  return Number(data.EURBRL.bid);
}
