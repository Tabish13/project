var helper = require('../helper/owners');
var ownersModel = require('../models/owners');
function owner()
{
	this.create = function(data, cb){
		var registerData = helper.createModel(data);
		if(registerData.owner_fname && registerData.owner_lname  &&registerData.owner_phone && registerData.owner_email &&registerData.bz_name &&registerData.bz_address && registerData.category && registerData.description ){
			ownersModel.create(registerData, cb);
		}else{
			cb("Insufficient parameter", { status: 'failed' });
		}

	};


	this.update = function(data,mobile, cb){
		var updateData = helper.createModel(data);
		console.log(updateData);
		if(updateData.owner_fname || updateData.owner_lname  || updateData.owner_phone || updateData.owner_email ||updateData.bz_name ||updateData.bz_address || updateData.category || updateData.description ){
			console.log('in update');
			ownersModel.update(updateData, mobile, cb);
		}else{
			cb({status:'failed',message:"missing body parameter to update."}, { status: 'failed' });
		}
	};


	this.categories = function(category, cb){
		ownersModel.getCategory(category, function(err, data){
			if(!err){
				console.log(data);
				if(data.length==0){
					//Making error for route.
                        cb({status:'success',message:'No Data found for category '+category,code:409},null);
                    }
                    else{

                    	//make helper if want customize format of data...
						cb(null,data);
					}
			}else{
				 cb(err,null);     
			}
		});
	};


	this.remove = function(mobile_no, cb){
		ownersModel.remove(mobile_no, cb);
	};



}
module.exports =  new owner();