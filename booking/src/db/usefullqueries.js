
//@@@ REVERSE ORDER QUERY 
db.inwards.find().sort({ sheetno: -1 }).exec(function (err, docs) {
 alert(JSON.stringify(docs));
}); 

//@@ DELTE THE QUERY AFTER THE XPIRATION TIME NOT ACTUALLY DLEETE SETS ID TO DLETED
db.inwards.ensureIndex({ fieldName: 'expirationDate', expireAfterSeconds: 60 }, function (err) {
});