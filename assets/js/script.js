$(document).ready(function(){
  let heartBtn           =  $("#heartbtn");
  let BdBtn              =  $("#BdBtn");
  let GiftBtn            =  $('#giftBtn') ;
  let heartP             =  $('#HeartP') ;
  let BdP                =  $('#BdP') ;
  let Text               =  $('#text');
  let closeBtn           =  $('#x-button');
  let MessageContainer   =  $("#message-container");
  

  $(heartBtn).on('click',function(){
    heartP.show();
    BdP.hide();
    Text.hide();
  });
//   heart ends
  $(BdBtn).on('click' ,function(){
   
    heartP.hide();
    BdP.show();
    Text.hide();

  });
//   close btn 
$(closeBtn).on('click',function(){
    
    heartP.hide();
    BdP.hide();
    Text.show();
    MessageContainer.hide()
});
// gift btn

$(GiftBtn).on('click' , function(){
    Text.hide();
    MessageContainer.show();
});
})