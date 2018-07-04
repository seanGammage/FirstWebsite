// JavaScript Document

	function calculation_BMI() {
		message = "Please correct the folowing items:\n\n";
		
		var validInput=true;
		var CalculatedBMI=0;
		
		//Retrieve the text box values
		var height = document.getElementById("height").value;
		var weight = document.getElementById("weight").value;
		
		//window.alert(milesDriven + " - " + gallonsUsed);
		
		//Retieve the answer/mgp object
		var BMIobject = document.getElementById("CalculatedBMI");
		
		//convert string/text input to numbers
		weight = parseFloat(weight);
		height = parseFloat(height);
		
		// alwasy verify and validate user input
		validInput = validateInput(height, weight);
		
		//user errors?
		if(validInput) {
			
			CalculatedBMI = (weight * 703) / (height^2);
			
			//format output
			CalculatedBMI = CalculatedBMI.toFixed(2); //takes data down to 2 decimals
			
			//place the anser in the textbox
			BMIobject.value = CalculatedBMI;
			
		}else {
			window.alert(message);	
		}
	}