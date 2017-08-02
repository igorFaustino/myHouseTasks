const mongoose = require('mongoose');
const config = require('../config/database');

// shopList schema
const ShopListSchema = mongoose.Schema({
	name: {
		type: String
	},
	itens: [{
		name: {
			type: String
		},
		isBought: {
			type: Boolean
		},
		qtd: {
			type: Number
		}
	}]
});

module.exports = mongoose.model('ShopList', ShopListSchema);
const ShopList = mongoose.model('ShopList', ShopListSchema);

// get one shopList
module.exports.getShopListById = function (id, callback) {
	ShopList.findById(id, callback);
}

// get all shopList
module.exports.getAllShopLists = function (callback) {
	ShopList.find({}, callback);
}

// add a new shopList
module.exports.addShopList = function (newShopList, callback){
	newShopList.save(callback);
}

// update shopList
module.exports.updateShopList = function (updatedShopList, callback){
	this.getShopListById(updatedShopList._id, function (err, shopList) {
		if (err) throw err;
		if (shopList) {
			shopList.name = updatedShopList.name;
			shopList.itens = updatedShopList.itens;
			shopList.save(callback);
		}
	})
}

// delete shopList
module.exports.deleteShopList = function (id, callback){
	ShopList.findById(id).remove(callback);
}