$(document).ready(function() {
	
	//WORKER
	$("#worker_btn").click(function() { // Function Runs On NEXT Button Click
		$(this).parent().next().fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
		
	});	
	$("#worker_residence_btn").click(function() { // Function Runs On NEXT Button Click
		$("#worker_residence").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#worker_tax_btn").click(function() { // Function Runs On NEXT Button Click
		$("#worker_tax").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#worker_cpr_btn").click(function() { // Function Runs On NEXT Button Click
		$("#worker_cpr").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	
	//STUDENT
	$("#student_btn").click(function() { // Function Runs On NEXT Button Click
		$("#student_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});

	});
	$("#student_residence_btn").click(function() { // Function Runs On NEXT Button Click
		$("#student_residence").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#student_tax_btn").click(function() { // Function Runs On NEXT Button Click
		$("#student_tax").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#student_cpr_btn").click(function() { // Function Runs On NEXT Button Click
		$("#student_cpr").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});

	//SELF EMPLOYED
	$("#self_employed_btn").click(function() { // Function Runs On NEXT Button Click
		$("#self_employed_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
	
	});
	$("#self_employed_residence_btn").click(function() { // Function Runs On NEXT Button Click
		$("#self_employed_residence").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#self_employed_tax_btn").click(function() { // Function Runs On NEXT Button Click
		$("#self_employed_tax").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#self_employed_cpr_btn").click(function() { // Function Runs On NEXT Button Click
		$("#self_employed_cpr").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});

	//SUFFICIENT
	$("#sufficient_btn").click(function() { // Function Runs On NEXT Button Click
		$("#sufficient_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});			
	});
	$("#sufficient_residence_btn").click(function() { // Function Runs On NEXT Button Click
		$("#sufficient_residence").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#sufficient_tax_btn").click(function() { // Function Runs On NEXT Button Click
		$("#sufficient_tax").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#sufficient_cpr_btn").click(function() { // Function Runs On NEXT Button Click
		$("#sufficient_cpr").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});

	//FAMILY MEMBER
	$("#family_btn").click(function() { // Function Runs On NEXT Button Click
		$("#family_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
	});
	$("#family_residence_btn").click(function() { // Function Runs On NEXT Button Click
		$("#family_residence").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#family_tax_btn").click(function() { // Function Runs On NEXT Button Click
		$("#family_tax").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});
	$("#family_cpr_btn").click(function() { // Function Runs On NEXT Button Click
		$("#family_cpr").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});		
	});


	//PREVIOUS BUTTON
	$(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#first").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
	
	});
	$(".worker_pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#worker_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
		
	});
	$(".student_pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#student_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
		
	});
	$(".self_employed_pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#self_employed_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
		
	});
	$(".family_pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#family_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});
		
	});
	$(".sufficient_pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
		$("#sufficient_select").fadeIn('slow');
		$(this).parent().css({
			'display': 'none'
		});	
	});
});
