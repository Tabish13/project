var Datastore = require('nedb');
var db = {};
db.inwards= new Datastore({ filename: './data/inwards', autoload: false });
db.outwards= new Datastore({ filename: './data/outwards', autoload: false });
db.bookings= new Datastore({ filename: './data/bookings', autoload: false });
db.inwards.getAutoincrementId = function (cb) {
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
db.inwards.getAutodecrementId = function (cb) {
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
db.outwards.getAutoincrementId = function (cb) {
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
db.outwards.getAutodecrementId = function (cb) {
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
db.bookings.getAutoincrementId = function (cb) {
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
db.bookings.getAutodecrementId = function (cb) {
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
module.exports = db;