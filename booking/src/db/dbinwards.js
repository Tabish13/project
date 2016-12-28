var Datastore = require('nedb');
var inwards = {};
inwards.db = new Datastore({ filename: './data/inwards', autoload: true });
inwards.db.getAutoincrementId = function (cb) {
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
inwards.db.getAutodecrementId = function (cb) {
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

module.exports = inwards;
