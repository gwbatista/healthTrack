$(document).ready( function() {
    $("#bloodPressure").validate({
      debug: true,
      rules: {
        bloodPressure: {
          required: true,
          number: true
        }
      },  
      messages: {
        bloodPressure: {
          required: "Esse campo não pode ser vazio",
          number: "Este campo é numerico"
        },  
      }
    });
  });