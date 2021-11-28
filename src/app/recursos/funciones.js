alert("Funciona correctamente")
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          RegistrarPersona();
          event.preventDefault();
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarPersona() {
  let TipoDocumento = document.getElementById("txtTipoDocumento").value;
  let NumeroDocumento = document.getElementById("txtNumero").value;
  let nombres = document.getElementById("txtNombres").value;
  let apellidos = document.getElementById("txtApellidos").value;
  let correo = document.getElementById("txtCorreo").value;
  let Direccion = document.getElementById("txtDireccion").value;
  let Ciudad = document.getElementById("txtCiudad").value;
  let Pais = document.getElementById("txtPais").value;
  let celular = document.getElementById("txtCelular").value;
  let FechaNto = new Date(document.getElementById("txtFechaNacimiento").value);


  let url = 'http://localhost:3000/personas';
  let datos = {
    TipoDocumento: TipoDocumento,
    NumeroDocumento: NumeroDocumento,
    Nombre: nombres,
    Apellidos: apellidos,
    Correo: correo,
    Direccion: Direccion,
    Ciudad: Ciudad,
    Pais: Pais,
    Celular: celular,
    FechaNacimiento: FechaNto
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'content-type': 'application/json' }
  }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
  alert("Funciona correctamente")
}