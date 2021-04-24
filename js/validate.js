function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');

  if (event.latitude < -90 || event.latitude > 90) {
    window.print("Latitude: must be a valid number between -90 and 90");
  }
  else if (event.longitude < -180 || event.longitude > 180) {
    window.print("Longitude: must be a valid number between -180 and 180");
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
