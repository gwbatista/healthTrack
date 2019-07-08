$(document).ready( function() {
    $("#formFood").validate({
      debug: true,
      rules: {
        descriptionFood: {
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
        descriptionFood: {
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