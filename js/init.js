$(document).ready(function(){
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $("select").material_select();
    $("#amount").val("50000");
    updateProfit();

    // $("#profit").html("Please Enter Amount");

    // $('#particlejs').particleground();

  	$("#amount").keyup(function(event) {
  		updateProfit();
		});

		$("#currency").change(function(){
  		updateProfit();
		});
}); // end of jQuery name space


function updateProfit(){
	var profitFactor = parseInt($('#currency :selected').val());
	var amount = parseInt($("#amount").val());
	if(!amount){
		$("#profit").html("Please Enter Amount");
		return;
	}
	var profit = amount * profitFactor;
	$("#profit").html("PKR " + profit);
}

function transition(){
	$("#first").fadeOut("slow", function(){
	    $("#second").show().fadeIn("slow", function(){
	    	$("html, body").animate({ 
	    		scrollTop: 0 
	    	}, "slow");
	    });
	});
}

function emailSubmit(){
	var email = $("#email").val();
  $.post("https://woxcutapi.herokuapp.com/user",
  				{
  					email: email
  				},
  				function(result){
  				});
	$("#emailForm").fadeOut("slow", function(){
		$("#afterEmailForm").show().fadeIn("slow", function(){});
	});
}