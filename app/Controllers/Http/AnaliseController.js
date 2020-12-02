'use strict'

const Acesso = use('App/Models/Acesso')
const Contador = use('App/Models/Contadores')

class AnaliseController {

  async Acessos({ request, response, params }) {

    const data = await request.all()


    const acesso = await Acesso.create(data)
    await acesso.save()

    return acesso

  }

  async Contador({ request, response, params }) {

    /*     const contador = await Contador.find(1)

        if(contador.acessos == null) {
          contador.acessos = 0
        }

        const acessos = contador.acessos ++

        await contador.merge(acessos) */
    const contador = await Contador.create({ acessos: 0 })
    await contador.save()
    return contador

  }
}

module.exports = AnaliseController
