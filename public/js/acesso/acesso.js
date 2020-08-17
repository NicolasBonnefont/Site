async function acesso (div){

  await axios.post('/api/acesso',
  {
    "url": location.href,
    "campo": div
  })
  .then(function(response){

  })
  .cacth(function(error){

  })
}

async function contador(){

  await axios.post('/api/contator')
}

contador()
