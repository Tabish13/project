var connection = require('../dbhandler/dbconnection');

function owner() {
    this.create = function(owner_details, cb) {

        connection.acquire(function(err, con) {
            //console.log(owner_details);
            if (!err) {
                con.query('insert into owner_details set ?', owner_details, function(err, result) {
                    con.release();
                    if (!err) {
                        cb(err, { status: 'success' });
                    } else {
                        if (err.errno === 1062) {
                            var duplicateerror = { status: 'failed', code: 409, error_message: 'user already exist.' };
                            cb(duplicateerror, { status: 'failed' });
                        } else {
                            cb(err, { status: 'failed' });
                        }

                    }
                });
            }else{
                cb(err,null);
            }


        });
    };


    this.update = function(owner_update, mobile, cb) {

        connection.acquire(function(err, con) {
            
            con.query('update owner_details set ? where owner_phone = ?', [owner_update, mobile], function(err, result) {
                con.release();
                if (!err) {
                    console.log(result.affectedRows);
                    if (result.affectedRows)
                        cb(err, { status: 'success' });
                    else
                        cb({ status: 'failed', message: 'No such mobile number registered.', sqlError: result }, { status: 'failed' });
                } else {
                    cb({ status: 'failed', message: 'some error occured.', sqlError: err }, { status: 'failed' });
                }
            });
        });
    };


    this.checkCategory = function(category, cb) {
        connection.acquire(function(err, con) {
            con.query('SELECT COUNT(*) FROM categories WHERE category = ?', [category], function(err, result) {
                con.release();
                if (!err) {
                    console.log(result);
                    var key = 'COUNT(*)';
                    var check = result[0][key];
                    if (check) {
                        cb(err, true);
                    }

                } else {
                    cb({ status: 'failed', message: 'checkCategory.', sqlError: err }, { status: 'failed' });
                }
            });
        });
    };


    this.getCategory = function(category, cb) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM owner_details WHERE category = ?', [category], function(err, result) {
                con.release();
                if (!err) {

                    cb(null, result);

                } else {
                    cb({ status: 'failed', message: 'some error occured', sqlerror: err }, null);
                }
            });
        });
    };


    this.remove = function(mobile, cb) {
        connection.acquire(function(err, con) {
            con.query('DELETE FROM owner_details WHERE owner_phone = ?;', [mobile], function(err, result) {
                con.release();
                if (!err) {
                    console.log(result);
                    cb(null, result)

                } else {
                    console.log(err);
                    cb(err, null);
                }
            });
        });
    };


}
module.exports = new owner();