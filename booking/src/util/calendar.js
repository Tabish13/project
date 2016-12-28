		var moment = require('moment');
    	var calendar = {};
    	calendar.date = moment().format('DD/MM/YYYY');
    	calendar.time = moment().format('hh:mm A');
    	module.exports = calendar;