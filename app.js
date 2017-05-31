		/*declared outer function with inner function passing as arrgument */
			function OutterFunction(InnerFunc) {
			   /* Checking arrgument it is a function or null */
			   if (InnerFunc && (typeof InnerFunc == "function")) {
				  InnerFunc(); /* Calling inner function*/
				 }
			}

			/* Calling outer function with declared funcation to pass inner funcation as arrgument */
			OutterFunction(function(){
				/* Displaying message in console.*/
			 console.log("Hello World From Inner Function");
			}); 