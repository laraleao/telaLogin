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
  let loginInformado = document.getElementById("user").value;
  let senhaInformada = document.getElementById("senha").value;

  const loginJoao = ["Joao", "1234"];
  const loginCaio = ["Caio", "senha"];
  const loginBruno = ["Bruno", "senha1234"];

  if (loginInformado == loginJoao[0] && senhaInformada == loginJoao[1]) {
    alert("Dados cadastrados");
  } else if (loginInformado == loginCaio[0] && senhaInformada == loginCaio[1]) {
    alert("Dados cadastrados");
  } else if (
    loginInformado == loginBruno[0] &&
    senhaInformada == loginBruno[1]
  ) {
    alert("Dados cadastrados");
  } else {
    alert("Login Inválido");
  }
}
