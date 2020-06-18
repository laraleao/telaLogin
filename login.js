/* Criar uma tela de login com os campos login e senha. Os seguintes logins podem ser autenticados
*login* - *senha*
joao - 1234
caio - senha
bruno - senha123

ao realizar a autenticacao deve apresentar uma mensagem para o usuario informando que foi autenticado.

Caso o login esteja errado deve informar ao usuario uma mensagem de login invalido.
Caso a senha esteja errada deve informar a senha uma mensagem de senha invalida.
*/

function validarSenhas() {
  var loginJoao = "Joao";
  var senhaJoao = "1234";
  var loginCaio = "Caio";
  var senhaCaio = "senha";
  var loginBruno = "Bruno";
  var senhaBruno = "senha1234";
  var loginInformado = document.getElementById("user").value;
  var senhaInformada = document.getElementById("senha").value;

  if (loginInformado == loginJoao && senhaInformada == senhaJoao) {
    alert("Dados cadastrados");
  } else if (loginInformado == loginCaio && senhaInformada == senhaCaio) {
    alert("Dados cadastrados");
  } else if (loginInformado == loginBruno && senhaInformada == senhaBruno) {
    alert("Dados cadastrados");
  } else {
    alert("Login Inválido");
  }
}
