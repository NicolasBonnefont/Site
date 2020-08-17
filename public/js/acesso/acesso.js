async function acesso (div){


  await axios.post('/api/acessos',
  {
    "url": location.href,
    "campo": div
  })
  .then(function(response){
    console.log(response)

  })
  .cacth(function(error){
    console.log(error)

  })
}



