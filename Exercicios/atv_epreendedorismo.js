// Preço de venda: 139400,00
// Custo fixo mensal: 17608918,00
// Custo variável por unidade: 73445,00
//investimento inicial: 178000000,00
// Expectativa de lucro: 20%
// Depreciação: 1809204,00

//Calculo de Ponto de Equilíbrio
const precoVenda = 139400.0;
const custoFixoMensal = 17608918.0;
const custoVariavelPorUnidade = 73445.0;
const investimentoInicial = 178000000.0;
const expectativaLucro = 0.2;

const pontoEquilibrio =
  custoFixoMensal / (precoVenda - custoVariavelPorUnidade);
console.log("Ponto de Equilíbrio: " + pontoEquilibrio.toFixed(2) + " unidades");

const pontoEquilibrioLucro =
  (custoFixoMensal + expectativaLucro * investimentoInicial) /
  (precoVenda - custoVariavelPorUnidade);
console.log(
  "Ponto de Equilíbrio com Lucro: " +
    pontoEquilibrioLucro.toFixed(2) +
    " unidades"
);

const margemSeguranca = pontoEquilibrioLucro - pontoEquilibrio;
console.log("Margem de Segurança: " + margemSeguranca.toFixed(2) + "%");

const retornoInvestimento =
  (expectativaLucro * investimentoInicial) / investimentoInicial;
console.log(
  "Retorno sobre o Investimento (ROI): " + retornoInvestimento * 100 + "%"
);

const payback =
  investimentoInicial / (precoVenda - custoVariavelPorUnidade) / 12; // em meses
console.log("Payback: " + payback.toFixed(2) + " meses");
