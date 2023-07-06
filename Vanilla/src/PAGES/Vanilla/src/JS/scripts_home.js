

    // Função para exibir o modal correspondente ao botão clicado
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
  
        var closeModal = modal.getElementsByClassName("close")[0];
        closeModal.addEventListener("click", function () {
          modal.style.display = "none";
        });
  
        window.addEventListener("click", function (event) {
          if (event.target== modal) {
            modal.style.display = "none";
          }
        });
      }
  
      // Adicionar listeners de evento para cada botão
      document.getElementById("users").addEventListener("click", function () {
        openModal("usersModal");
      });
  
      document.getElementById("loja").addEventListener("click", function () {
        openModal("lojaModal");
      });
  
      document.getElementById("produtos").addEventListener("click", function () {
        openModal("produtosModal");
      });
      document.getElementById("registrar_trocas").addEventListener("click", function () {
        openModal("registrar_trocasModal");
      });
  
      document.getElementById("relatorios").addEventListener("click", function () {
        openModal("relatoriosModal");
      });
  
      document.getElementById("sair").addEventListener("click", function () {
        window.location.href = "../index.html";
      });
      
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("userForm");
    var btnSalvar = document.getElementById("cadastroUsuario");
  
    btnSalvar.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário
  
      // Obtém os valores dos campos do formulário
      var id = document.getElementById("id").value;
      var nome = document.getElementById("nome").value;
      var cpf = document.getElementById("cpf").value;
      var celular = document.getElementById("celular").value;
      var endereco = document.getElementById("endereco").value;
      var email = document.getElementById("email").value;
      var senha = document.getElementById("senha").value;
      var funcao = document.getElementById("funcao").value;
  
      // Faça o que desejar com os valores dos campos
      console.log("ID:", id);
      console.log("Nome:", nome);
      console.log("CPF:", cpf);
      console.log("Celular:", celular);
      console.log("Endereço:", endereco);
      console.log("E-mail:", email);
      console.log("Senha:", senha);
      console.log("Função:", funcao);
  
      // Limpa os campos do formulário
      form.reset();
    });
  });
  