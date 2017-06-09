/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
    
  //Set Stripe public key.
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  //When user clicks form submit btn,
  //prevent default submission behavior.
  submitBtn.click(function(event){
    event.preventDefault();
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
    //Send the card info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  });
  //Stripe weill return a card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app.

});