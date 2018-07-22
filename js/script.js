
$(document).ready(function () {
		// init sideNav
		 $(".button-collapse").sideNav();
		 // init slider
		 $(".slider").slider({
		 	indicators:false,
		 	height:500,
		 	transition:500,
		 	interval:6000
		 });
		 // autocomplete
		 $(".autocomplete").autocomplete({
		 	data:{
		 		"Leh Ladakh":null,
				"Khajjiar":null,
				"Manali":null,
				"Shimla":null,
				"Kasol":null,
				"Dalhousie":null,
				"Dharamshala":null,
				"Bir":null,
				"Kashmir Valley":null,
				"Ladakh":null,
				"Gulmarg":null,
				"Valley of Flowers":null,
				"Roopkund Lake":null,
				"Rishikesh":null,
				"Nainital":null,
				"Haridwar":null,
				"Dehradun":null,
				"Ghats in Varanasi":null,
				"Agra":null,
				"Jodhpur":null,
				"Udaipur":null,
				"Jaipur":null,
				"Pushkar":null,
				"Dudhsagar Falls":null,
				"Goa":null,
				"Pune":null,
				"Mahabaleshwar":null,
				"Chikmagalur":null,
				"Kabini":null,
				"Bandipur":null,
				"Coorg":null,
				"Dandeli":null,
				"Sakleshpur":null,
				"Hampi":null,
				"Gokarna":null,
				"Mysore":null,
				"Munnar":null,
				 }
		 });
		 $('.scrollspy').scrollSpy();
});