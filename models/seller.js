var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Seller Schema
var SellerSchema =new mongoose.Schema({
	user: {
		type: String,
		index:true
	},
	pass1: {
		type: String
    },
    category:{
        type: String
    },
    pass2: {
		type: String
	},
	email: {
		type: String
    },
    address: {
		type: String
    },
    state: {
		type: String
    },
    contact: {
		type: String
    },
    dob: {
		type: String
    },
    male: {
		type: String
    },
    female: {
		type: String
	},
});

var Seller = module.exports = mongoose.model('seller', SellerSchema);
module.exports = Seller;
// module.exports.createBuyer = function(newBuyer, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
// 	    bcrypt.hash(newBuyer.password, salt, function(err, hash) {
// 	        newBuyer.password = hash;
// 	        newBuyer.save(callback);
// 	    });
// 	});
// }

// module.exports.getBuyerByUsername = function(user, callback){
// 	var query = {user: user};
// 	Buyer.findOne(query, callback);
// }

// module.exports.getBuyerById = function(id, callback){
// 	Buyer.findById(id, callback);
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	if(err) throw err;
//     	callback(null, isMatch);
// 	});
// }