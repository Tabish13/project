
var moment = require('moment');
      var calendar = {};
      calendar.date = moment().format('DD/MM/YYYY');
      calendar.time = moment().format('hh:mm A');
$('#Date').val(calendar.date);

function calculatetotal(){
  var amountsinputs = $('.amount');
  var totalamount = 0;
  for (var i = 0; i < amountsinputs.length; i++) {
    //alert($(amountsinputs[i]).val())
    var toadd = $(amountsinputs[i]).val();
    if(toadd.length>0){
      totalamount = totalamount + parseInt(toadd);
    }
  }
  return totalamount;
}

//Click Event for the ADD Button will add product modal and amount input tag
$("#addp").click(function() {
  var $mpa = '<select name="product" class="product"><option value="laptop">Laptop</option><option value="desktop">Desktop</option><option value="printer">Printer</option><option value="accessories">Accessories</option></select><input type="text" name="model" placeholder="Model" class="model"><input type="text" name="amount" placeholder="Amount" class="amount"><br>'
$("#products").append($mpa);
});
//Any event on the div of the product modal and amount will calculate the total amount
$("#products").keyup(function() {
 var total = calculatetotal();
 $("#total").val(total);
});

$("#advance,#products").keyup(function() {
  var fetchtotal = $('#total').val();
  var advance = $('#advance').val();
  var total = fetchtotal - advance;
   $("#balance").val(total);
});

$("#payment").on("change",function() {

 var sVal=$(this).val();
 if(sVal== 'cheque'){
   var $further = '<label>Cheque Date : </label><input type="text" id="chequedate"><br><label>Cheque No. : </label><input type="text" id="chequeno"><br><label>Bank Name : </label><input type="text" id="bankname"><br><label>Amount : </label><input type="text" id="chequeamount"><br>'
 $("#paying").html($further);
 }
 else{
   $("#paying").html("");
 }
});
