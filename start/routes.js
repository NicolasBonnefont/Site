'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// ROTAS PARA AS VIEWS
Route.on('/').render('home')


// ROTA CORINGA PARA MOSTRAR CASO NAO ENCONTRE AS DEMAIS
Route.on('*').render('404') 
Route.on('/*').render('404') 

