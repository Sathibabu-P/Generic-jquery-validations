
ABOUT THIS APPLICATION:

	This application mainly used to validate a HTML FORM using a GENERIC JQUERY SCRIPT . 
	Herein we have a Java Script file, if we want to validate any HTML form elements we just add this file and call methods those are implemented in this file. 
	To explain this functionality we take one  form  named as Registrationform. We use only one java script file to validate  elements in these forms.


THE APPLICATION CONSISTS:


	index.html:- This consists of some Textboxes , radio buttons, comboboxes etc. we just include external style sheet and validation Java Script file to this file. 

	style.css:-  This is an external style sheet that has been linked in the html for applying styles to the elements in the html file.
	
	validation.js :- This had been existed in the js folder of the application that is linked through the html file.This consists of the generic validation functions that  have been applied to any of the form elements.

	Images:- This folder consists of the images that we have applied for the elements of the form.



LIST OF METHODS TO VALIDATE HTML FORM FIELDS:

	* reqiured
	* isvalidate
	* min
	* max
	* msg


REQUIRED:
	
	Deifines the form element is required  
	ex:required="true"

ISVALIDATE: 

	Used to validate the input fields	
	ex: isValidate="email" -->  For email validation
	ex: isValidate="string" -->  Accept only characters
	ex: isValidate="numeric" -->  Accept only numbers
	ex: isValidate="alphanumeric" -->  Accept both numbers and characters

MIN:
	
	 Defines minimum characters are required to input field
	 ex:min="2"

MAX:
	
	Defines maximum characters allowed for input field
	ex:max="8"

MSG:

	Define display the custom error message
	ex:msg="error message to diplay" 


(NOTE:Define inside the form tag is [autocomplete="off" novalidate])

