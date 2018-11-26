'use strict'

var xss = require('xss')
var mongoose =  require('mongoose')
var User = mongoose.model('Order')
var uuid = require('uuid')
import orderHelper from '../dbhelper/orderHelper'


exports.orders = async (ctx, next) => {
  var data = await orderHelper.getOrders()
  ctx.body = {
    status: true,
    data
  }
}
