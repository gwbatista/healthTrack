$(document).ready(function () {
  $("#formPerfil").validate({
    debug: true,
    rules: {
      nameFull: {
        required: true,
      },
      dataNascimento: {
        required: true,
        number: true  
      },
      altura: {
        required: true,
        number: true  
      },
      email: {
        required: true
      }
    },
    messages: {
      nameFull: {
        required: "Esse campo não pode ser vazio"
      },
      dataNascimento: {
        required: "Esse campo não pode ser vazio",
        number: "Este campo é numerico"
      },
      altura: {
        required: "Esse campo não pode ser vazio",
        number: "Este campo é numerico"
      },
      email: {
        required: "Esse campo não pode ser vazio"
      }
    }  
  });
});