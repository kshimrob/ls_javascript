function isValidEmail(email) {
  // checks to see if @ is included only once in the email
  if (email.indexOf('@') < 0 || (email.indexOf('@') !== email.lastIndexOf('@'))) {
    return false;
  } 

  // split into local and domain
  var atIndex = email.indexOf('@');
  var local = email.substring(0, atIndex);
  var domain = email.substring(atIndex, email.length - 1);
  
  // check if the local is valid
  if (!local || local.match(/[^a-zA-Z0-9]/)) {
    return false;
  }

  return true;
}