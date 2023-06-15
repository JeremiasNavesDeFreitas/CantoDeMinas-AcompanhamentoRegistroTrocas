  /**
   * Função executada quando o documento HTML é carregado
   * Captura o formulário e o botão de salvar
   * Adiciona um evento de clique ao botão de salvar para enviar os dados do formulário
   */
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var salvarButton = document.getElementById('salvarButton');

    salvarButton.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      var formData = new FormData(form);

      // Enviar os dados para o arquivo PHP usando uma requisição Ajax
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'processar_formulario.php', true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          alert(xhr.responseText); // Exibe a resposta do servidor
          form.reset(); // Limpa o formulário após o envio
        }
      };
      xhr.send(formData);
    });
  });



