var iptQuantidade = document.querySelector("input#qtd");
var optTotal = document.querySelector("output#total");

iptQuantidade.oninput = function() {
  var preco = document.querySelector("dd#preco").textContent;
  preco = preco.replace("R$", "");
  preco = preco.replace(",", ".");
  preco = parseFloat(preco);

  var quantidade = iptQuantidade.value;
  var total = quantidade * preco;

  total = "R$" + total.toFixed(2);
  total = total.replace(".", ",");

  optTotal.value = total;
};
