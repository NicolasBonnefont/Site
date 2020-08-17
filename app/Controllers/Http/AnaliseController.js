'use strict'

const Acesso = use('App/Models/Acesso')
const Contador = use('App/Models/Contadores')

class AnaliseController {

  async acessos ({request, response, params}){

    const data = await request.all()

    const acesso = await Acesso.create(data)
    await acesso.save()

  }

  async contador({request, response, params}){
    console.log('aqui')
    const contador = await Contador.find(1)

    console.log(contador)


  }
}

module.exports = AnaliseController
