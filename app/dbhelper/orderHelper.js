'use strict'

var mongoose =  require('mongoose')
var Order = mongoose.model('Order')

/**
 * 通过电话号码查询
 * @param  {[type]} options.phone [description]
 * @return {[type]}                     [description]
 */
exports.getOrders = async () => {
	var query = Order.find()
	var res = null
	await query.exec(function(err, orders) {
		if(err) {
			res = {}
		}else {
			res = orders
		}
	})
	// console.log('res====>' + res)
	return res;
}