(function($){
  $(function(){

    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $("select").material_select();
    $("#profit").html("Please Enter Amount");

  	$("#amount").keyup(function(event) {
  		updateProfit();
		});

		$("#currency").change(function(){
  		updateProfit();
		});

  }); // end of document ready
})(jQuery); // end of jQuery name space


function updateProfit(){
	var profitFactor = parseInt($('#currency :selected').val());
	var amount = parseInt($("#amount").val());
	if(!amount){
		$("#profit").html("Please Enter Amount");
		return;
	}
	var profit = amount * profitFactor;
	$("#profit").html("$ " + profit);
}

function transition(){
	$('#first').fadeOut("slow", function(){
	    $("#second").show().fadeIn("slow", function(){
	    	$("html, body").animate({ 
	    		scrollTop: 0 
	    	}, "slow");
	    });
	});
}