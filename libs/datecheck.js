/**
 * Javascript code to be used with input type 'datecheck'.
 *
 * @author Simon Bachenberg
 *
 */

window.SFI_DateCheck_init = function ( input_id, params ) {
	$.validate({
		borderColorOnError : '', // Border color of elements with invalid value; empty string to not change border color as it messes up the style of the input box
		errorElementClass : 'form-error'  // Class that will be put on elements with invalid value
	});
};
