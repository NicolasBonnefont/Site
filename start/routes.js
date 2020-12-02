'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('/home')
Route.on('/empresa').render('/empresa')
Route.on('/MORERP').render('/MORERP')
Route.on('/MORBI').render('/MORBI')
Route.on('/MORTEMP').render('/MORTEMP')
Route.on('/Orcamento').render('/Orcamento')
Route.on('/PedidoDeVendas').render('/PedidoDeVendas')
Route.on('/NFe').render('/NFe')
Route.on('/RelatorioFaturamento').render('/RelatorioFaturamento')
Route.on('/contasapagar').render('/contasapagar')
Route.on('/contasareceber').render('/contasareceber')
Route.on('/RelatorioFinanceiro').render('/RelatorioFinanceiro')
Route.on('/RequisicaoCompras').render('/RequisicaoCompras')
Route.on('/PedidoCompras').render('/PedidoCompras')
Route.on('/Qualidade').render('/Qualidade')
Route.on('/Estoque').render('/Estoque')
Route.on('/RelatorioCompras').render('/RelatorioCompras')
Route.on('/videos').render('/videos/videos')
Route.on('/obrigado').render('/obrigado')
/* Route.on('/equipemor').render('/equipemor') */

Route.post('email', 'EmailController.store')
Route.post('api/contador', "AnaliseController.contador")
Route.post('api/acessos', "AnaliseController.acessos")

Route.on('*').render('404')


