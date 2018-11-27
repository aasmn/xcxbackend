'use strict'

const Router = require('koa-router')
const User = require('../app/controllers/user')
const App = require('../app/controllers/app')
const Order = require('../app/controllers/order')

module.exports = function(){
	var router = new Router({
    prefix: '/api'
  })

  // user
  router.post('/u/signup', App.hasBody, User.signup)
  router.post('/u/update', App.hasBody, App.hasToken, User.update)

  // DB Interface test
  router.get('/test/user/users',User.users)
  router.post('/test/user/add',User.addUser)
  router.post('/test/user/delete',User.deleteUser)

  router.get('/orders',Order.orders)
  router.get('/.well-known/pki-validation/fileauth.txt',async (cx,next)=>{
    await next();
    cx.response.body="201811251135564p6t8fcuswy4wxdxlenqwfwrzc2nsy0oumg5qn3tkq542jcd39";
  });

  return router
}