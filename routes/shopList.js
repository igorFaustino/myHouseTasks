const express = require('express');
const router = express.Router();
const passport = require('passport');
const ShopList = require('../models/shopList');

// get all shopLists
router.get('/lists', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	ShopList.getAllShopLists(function (err, lists) {
		if (err) {
			res.send(err);
		}
		res.json(lists);
	});
});

// get a single list
router.get('/list/:id', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	ShopList.getShopListById(req.params.id, function(err, list){
		if(err){
			res.send(err);
		}
		res.json(list);
	});
});

// Save Shop List
router.post('/list', passport.authenticate('jwt', { session: false}), function(req, res, next){
	let newList = new ShopList({
		name: req.body.name,
		itens: req.body.itens
	});

	ShopList.addShopList(newList, function (err, list) {
		if (err){
			console.log(err);
			res.json({success: false, msg: 'Failed to add Shop List', shopLists: null});
		} else {
			res.json({success: true, msg: 'Shop List registered', shopList: list});
		}
	});
});

// Update shop list
router.put('/list', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	var updatedList = req.body;
	ShopList.updateShopList(updatedList, function (err, list) {
		if (err) {
			res.json({success: false, msg: 'Failed to update shop list'});
		} else {
			res.json({success: true, msg: 'shop list updated'});
		}
	});
});

// Delete shop list
router.delete('/list/:id', passport.authenticate('jwt', { session: false}), function (req, res, next) {
	var id = req.params.id;
	ShopList.deleteShopList(id, function (err, list) {
		if (err) {
			res.json({success: false, msg: 'Failed to delete Shop List'});
		} else {
			res.json({success: true, msg: 'Shop List deleted'});
		}
	});
});

module.exports = router;