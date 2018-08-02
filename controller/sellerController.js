// var mongoose = require("mongoose");  
// var User = require("../models/User");  
// var userController ={};  

// userController.create= function(req,res) {
// 	res.render("../views/signup");  
// };
// userController.save=function(req,res){
//     var user= new User(req.body);
    
//     user.save(function(err) {
//     if(err) {
//     console.log(err);
//     res.render("../views/signup");
//     }
//     else  {
//     console.log("Successfully created a user ");
//     res.redirect("/users/show/"+user._id);
//     }
//     });
// };
var mongoose = require("mongoose");
var buyer = require("../models/buyer");
mongoose.connect('mongodb://localhost/buyer');
	var db= mongoose.connection;

var sellerController = {};

// Show list of products
sellerController.list = function(req, res) {
  buyer.find({}).exec(function (err, sellers) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/sellers/index", {sellers: sellers});
    }
  });
};

// Show product by id
sellerController.show = function(req, res) {
  Seller.findOne({_id: req.params.id}).exec(function (err, seller) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/sellers/show", {seller: seller});
    }
  });
};

// Create new product
sellerController.create = function(req, res) {
  res.render("../views/sellers/create");
};

// Save the new product
sellerController.save = function(req, res) {
  var seller = new Seller(req.body);

  seller.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/sellers/create");
    } else {
      console.log("Successfully created a product.");
      res.redirect("/sellers/show/"+seller._id);
    }
  });
};

// Edit a product
sellerController.edit = function(req, res) {
  Seller.findOne({_id: req.params.id}).exec(function (err, employee) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/seller/edit", {seller: seller});
    }
  });
};

// Update a product
sellerController.update = function(req, res) {
  Seller.findByIdAndUpdate(req.params.id, { $set:
     { name: req.body.name, address: req.body.address, position: req.body.position, 
      salary: req.body.salary }}, { new: true }, function (err, seller) {
    if (err) {
      console.log(err);
      res.render("../views/sellers/edit", {seller: req.body});
    }
    res.redirect("/sellers/show/"+seller._id);
  });
};

// Delete a product
sellerController.delete = function(req, res) {
  Seller.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Product deleted!");
      res.redirect("/sellers");
    }
  });
};

module.exports = sellerController;    