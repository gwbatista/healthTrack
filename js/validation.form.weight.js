$(document).ready( function() {
    $("#formWeight").validate({
      debug: true,
      rules: {
        weight: {
          required: true,
          number: true
        }
      },  
      messages: {
        weight: {
          required: "Esse campo não pode ser vazio",
          number: "Este campo é numerico"
        } 
      }
    });
  });