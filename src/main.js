function calcular() {

  // capturando dados
  var valorProjeto = document.getElementById("ValorTotal").value;
  var horasDiarias = document.getElementById("horasDia").value;
  var diasEfetivos = document.getElementById("diasEfetivos").value;
  var diasFerias = document.getElementById("diasFerias").value;

  let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
  console.log(valorProjeto, horasDiarias, diasEfetivos, diasFerias)
  var result = document.getElementById("result");
  if(valorHora === NaN && valorHora === String){
    alert('Apenas números são aceitos!')
  } else {
    result.style.backgroundColor = "#9363cc";
    result.style.color = "#fff"
    result.style.fontWeight = "bold";
    result.style.fontSize = "24px"
    result.style.fontFamily = "Roboto, sans-serif";
    result.innerHTML = `Valor por Hora: R$ ${valorHora}`;
  }
    
}

