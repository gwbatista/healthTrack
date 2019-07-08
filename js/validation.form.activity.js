$(document).ready( function() {
  $("#formActivity").validate({
    debug: true,
    rules: {
      descriptionActivity: {
        required: true,
      },
      calorias: {
        required: true,
        number: true
      },
      DataHora: {
        required: true,
        number: true
      }
    },  
    messages: {
      descriptionActivity: {
        required: "Esse campo não pode ser vazio",
      },  
      calorias: {
        required: "Esse campo não pode ser vazio",
        number: "Este campo é numerico"
      },
      DataHora: {
        required: "Esse campo não pode ser vazio",
        number: "Este campo é numérico"
      }
    }
  });
});