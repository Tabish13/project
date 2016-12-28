var Datastore = require('nedb');
var bookings = {};
bookings.db = new Datastore({ filename: './data/bookings', autoload: true });
bookings.db.getAutoincrementId = function (cb) {
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
bookings.db.getAutodecrementId = function (cb) {
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
module.exports = bookings;