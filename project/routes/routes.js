var utilities = require('../utils/util');
var owners = require('../controllers/owners');
var ownersModel = require('../models/owners');
module.exports = function route(app)
{
	/*
	 * Base url: domain/register
	 * Body Params required for registration:
	 * @ firstname
	 * @ lastname
	 * @ mobile
	 * @ emailid
	 * @ bzname
	 * @ bzaddress
	 * @ category
	 * @ description
	*/
	app.post('/register',function(req,res){

		if(!(Object.keys(req.body).length === 0)){
			utilities.logger.log('info','Registering initiated.');
			owners.create(req.body, function(err,result){
				if(err){
					res.status(202);
					res.send(err);
				}
				else{
					res.send(result);
				}

			});
		}else{
			res.send("Insufficient Parameter's.");
		}
	});

	/*
	 * Base url: domain/update/{Registered_mobile_number}
	 * Body Params required for update:
	 * Minimum 1 should be present(Remaining optional);
	 * @ firstname
	 * @ lastname
	 * @ mobile
	 * @ emailid
	 * @ bzname
	 * @ bzaddress
	 * @ category
	 * @ description
	*/
	app.put('/update/:mobile_no',function(req, res){
		var mobileNo = req.params.mobile_no;
		if(mobileNo&&req.body){
			utilities.logger.log('info','Updation initiated.');
			owners.update(req.body, mobileNo, function(err,result){
				if(!err){
					res.send(result);
				}else{
					res.status(409);
					res.send(err);
				}

			});

		}else{
			res.send("Insufficient Parameter's");
		}
	});

	/*
	 * Base url: domain/category/{category_name}
	 * will get all selected category data present.
	*/

	/*  @-----------check category api---
	app.get('/category/:category',function(req, res){
		var category = req.params.category;
		ownersModel.checkCategory(category,function(err, result){
			if(result){
				//make call to controller to get the data...
			}else{
				res.send({status:'success',message:'category is not present.'});
			}
		});
	});*/

	app.get('/category/:category', function(req, res){
		var category = req.params.category;
		owners.categories(category, function(err, result){
			if(!err){
				res.send(result);
			}else{
				res.status(409);
				res.send(err);
			}
		});
	});



	app.delete('/remove/mobile/:mobile_no', function(req, res){
		var mobile_no = req.params.mobile_no;
		owners.remove(mobile_no, function(err, result){
			if(!err){
				res.send(result);
			}else{
				res.send(err);
			}
		});


	});



}

 