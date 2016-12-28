var Datastore = require('nedb');
var outwards = {};
outwards.db = new Datastore({ filename: './data/outwards', autoload: true });
outwards.db.getAutoincrementId = function (cb) {
	    this.update(
	        { _id: '__autoid__' },
	        { $inc: { seq: 1 } },
	        { upsert: true, returnUpdatedDocs: true },
	        function (err, affected, autoid) { 
	            cb && cb(err, autoid.seq);
	        }
	    );
    return this;
};
outwards.db.getAutodecrementId = function (cb) {
	    this.update(
	        { _id: '__autoid__' },
	        { $inc: { seq: -1 } },
	        { upsert: true, returnUpdatedDocs: true },
	        function (err, affected, autoid) { 
	            cb && cb(err, autoid.seq);
	        }
	    );
    return this;
};
module.exports = outwards;