document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("relatoriosForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos do formulário
    var data = document.getElementById("data").value;
    var idProduto = document.getElementById("id_produto").value;
    var descricao = document.getElementById("descricao").value;
    var lote = document.getElementById("lote").value;
    var dataFabricacao = document.getElementById("data_fabricacao").value;
    var dataVencimento = document.getElementById("data_vencimento").value;
    var quantidade = document.getElementById("quantidade").value;
    var codigoConfirmacao = document.getElementById("codigo_confirmacao").value;

    // Faça o que desejar com os valores dos campos
    console.log("Data:", data);
    console.log("ID do Produto:", idProduto);
    console.log("Descrição:", descricao);
    console.log("Lote:", lote);
    console.log("Data de Fabricação:", dataFabricacao);
    console.log("Data de Vencimento:", dataVencimento);
    console.log("Quantidade:", quantidade);
    console.log("Código de Confirmação:", codigoConfirmacao);

    // Limpa os campos do formulário
    form.reset();
  });
});