let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = ""; // Any = Qualquer Valor....
qualquer = 22;

// Arrays
const lista:number [] = [];
lista.push(1, 55, 4, 12, 2.5);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
   }
// Enum
enum tipoTransacao {  
    DEPOSITO = "Depósito",
    TRASNFERENCIA = "Transfência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
 }

   const novaTransacao: Transacao = {   
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
}
