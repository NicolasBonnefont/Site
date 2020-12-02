async function enviaEmail() {
  Event.preventDefault()

  document.getElementById('btnEnviaEmail').disabled = true

  axios.post('/email',
    {
      'nome': document.getElementById('nome').value,
      'email': document.getElementById('email').value,
      'texto': document.getElementById('texto').value,
      'telefone': document.getElementById('telefone').value
    })
    .then(function (response) {
      Swal.fire({
        allowOutsideClick: false,
        position: 'center',
        icon: 'success',
        title: 'Obrigado pela a mensagem !',
        showConfirmButton: false,
        timer: 1800

      }).then((result) => {

       document.getElementById('formHome').reset()
       document.getElementById('btnEnviaEmail').disabled = false
       location.href = "https://morinfo.com.br/obrigado";
      })
    })
    .catch(function (erro) {
      console.log(erro)
      document.getElementById('formHome').reset()
      document.getElementById('btnEnviaEmail').disabled = false
    })
}
