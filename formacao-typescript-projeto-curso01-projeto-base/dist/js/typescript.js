let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = ""; // Any = Qualquer Valor....
qualquer = 22;
// Arrays
const lista = [];
lista.push(1, 55, 4, 12, 2.5);
// Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRASNFERENCIA"] = "Transf\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
