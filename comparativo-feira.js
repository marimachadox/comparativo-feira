function start(){

    var produto = parseFloat(prompt("Qual dos produtos disponíveis você deseja comparar?\nInsira:\n1 para Tomate\n2 para Abacaxi\n3 para Limão\n4 para Laranja"));
    var precoAtual= parseFloat(prompt("Por favor, insira o preço atual do produto! Use . (ponto) no lugar de , (vírgula)"));
    var precoAntigo = parseFloat(prompt("Por favor, insira o preço antigo do produto!Use . (ponto) no lugar de , (vírgula)"));

    if (produto === 1 && precoAtual > precoAntigo){
        alert("O tomate teve aumento de R$" +(precoAtual-precoAntigo));

    }
    else if(produto === 1 && precoAtual < precoAntigo){
        alert("O tomate diminuiu R$"+(precoAntigo-precoAtual));
    }
    else if (produto === 1 && precoAtual == precoAntigo){
        alert("O produto não teve alteração de preço")
        }

    else if (produto === 2 && precoAtual > precoAntigo){
        alert("O abacaxi teve aumento de R$" + (precoAtual-precoAntigo));
    }

    else if (produto === 2 && precoAtual < precoAntigo){
        alert("O abacaxi diminuiu R$ "+ (precoAntigo-precoAtual));
    }
    else if (produto === 2 && precoAtual == precoAntigo){
    alert("O produto não teve alteração de preço")
    }
    else if (produto === 3 && precoAtual > precoAntigo){
        alert("O limão teve aumento de R$"+ (precoAtual-precoAntigo));
    }

    else if (produto === 3 && precoAtual < precoAntigo){
        alert("O limão diminuiu de R$ "+ (precoAntigo-precoAtual));
    }
    else if (produto === 3 && precoAtual == precoAntigo){
        alert("O produto não teve alteração de preço")
        }
    else if (produto === 4 && precoAtual > precoAntigo){
        alert("A laranja teve aumento de R$"+ (precoAntigo-precoAtual));
    }
    else if (produto === 4 && precoAntigo < precoAtual){
        alert("A laranja diminuiu de R$" + (precoAtual+precoAntigo));
    }
    else if (produto === 4 && precoAtual == precoAntigo){
        alert("O produto não teve alteração de preço")
        }
    else{
        alert("Produto não encontrado, por favor, insira uma das opções!")
    }
}

