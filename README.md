# 💱 Currency Converter React

Aplicação web de conversão de moedas desenvolvida em **React**, que consome uma **API externa de câmbio em tempo real** para converter valores de **USD e EUR para BRL**, respeitando precisão financeira e boas práticas de arquitetura.

---

## 🚀 Funcionalidades

- Conversão de **Dólar (USD)** e **Euro (EUR)** para **Real Brasileiro (BRL)**
- Cotação atualizada em tempo real via API pública
- Cálculo com precisão decimal (centavos preservados)
- Arredondamento aplicado apenas na exibição (padrão financeiro)
- Interface simples, centralizada e responsiva
- Botão para limpar valores e reiniciar a conversão

---

## 🧠 Conceitos aplicados

- Separação de responsabilidades
- Consumo de API externa com `fetch`
- Gerenciamento de estado com React Hooks (`useState`, `useEffect`)
- Componentização
- Boas práticas de lógica financeira
- Formatação monetária com `toLocaleString`

---

## 🛠️ Tecnologias utilizadas

- **React**
- **JavaScript (ES6+)**
- **CSS**
- **AwesomeAPI (Exchange Rates)**

---

## 🌐 API utilizada

Os dados de câmbio são obtidos através da API pública:

- USD → BRL  
  `https://economia.awesomeapi.com.br/json/last/USD-BRL`

- EUR → BRL  
  `https://economia.awesomeapi.com.br/json/last/EUR-BRL`

---

## ▶️ Como executar o projeto localmente

# Clone o repositório
git clone https://github.com/seu-usuario/currency-converter-react.git

# Acesse a pasta do projeto
cd currency-converter-react

# Instale as dependências
npm install

# Inicie o projeto
npm start

---

## 🤝 Créditos

- Dados de câmbio fornecidos por **AwesomeAPI**  
  https://economia.awesomeapi.com.br/

- Projeto idealizado, desenvolvido e mantido por **Auridinei**  
  Aplicação criada com foco em boas práticas, precisão financeira e uso como portfólio profissional.

- Apoio conceitual e revisão técnica durante o desenvolvimento.

