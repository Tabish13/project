function owner(){
	this.createModel = function(data){
		//console.log(data);
		var registerData = {};
		if(typeof data !== 'object')
			return registerData;

		if(data.firstname)
			registerData.owner_fname = data.firstname;

		if(data.lastname)
			registerData.owner_lname = data.lastname;

		if(data.mobile)
			registerData.owner_phone = data.mobile;

		if(data.emailid)
			registerData.owner_email = data.emailid;

		if(data.bzname)
			registerData.bz_name = data.bzname;

		if(data.bzaddress)
			registerData.bz_address = data.bzaddress;

		if(data.category)
			registerData.category = data.category;

		if(data.description)
			registerData.description =data.description;

		return registerData;
		
	}
}
module.exports = new owner();