let pedido = prompt(`Você deseja coxinha , digite a opção: \n"S" para Sim\n"N" para Não`).toUpperCase()
let conta = 0

while(pedido==="S"){
    
    conta = conta + 2.50
    alert(`Valor atual da conta R$${conta.toFixed(2)}`)
    pedido=prompt(`Você deseja continuar comendo coxinha, digite: \n"S" para Sim\n"N" para Não`).toUpperCase()
    }    

alert(`O valor total da conta a pagar é R$${conta.toFixed(2)}\n\n Obrigado pela preferência`)

/*if (maisCoxinha === "s") {
    while (maisCoxinha === "s") {
      conta += 1;
      maisCoxinha = prompt(
        `Deseja comer mais coxinhas? Digite S para "sim" e N para "não":`
        ).toLowerCase();
      }
    }
    alert("Estamos encerrando a conta!");
    alert(`Você consumiu ${conta} coxinhas num total de ${conta * 2.5} reais`);
    location.reload();*/