function calcular(tipo,valor) {
    if (tipo === 'acao'){

      if (valor === 'c'){
        document.getElementById('resultado').value = ''
      }
      if (valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.'){
        document.getElementById('resultado').value += valor
      }

      if (valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value =  valor_campo
      }

      
      
  }
  
  else if (tipo === 'valor') {
    var valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value = valor_campo + valor
  }

  
}

function deleteCaracter() {
  var resultado = document.getElementById('resultado').value;
  if (resultado.length > 0) {
    // Remove o último caracter do valor do campo
    document.getElementById('resultado').value = resultado.slice(0, -1);
  }
}