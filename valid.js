
function validateForm() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = parseInt(document.getElementById('age').value, 10);

  // Regular expression to match only alphabets
  const alphabetsOnly = /^[a-zA-Z]+$/;

  // Check if first name contains only alphabets
  if (!firstName.match(alphabetsOnly)) {
    alert('First name should contain only alphabets.');
    // return false;
  }

  // Check if last name contains only alphabets
  if (!lastName.match(alphabetsOnly)) {
    alert('Last name should contain only alphabets.');
    // return false;
  }

  // Check if age is between 18 and 50
  if (isNaN(age) || age < 18 || age > 50) {
    alert('Age should be a number between 18 and 50.');
    // return false;
  }

//   return true;
}
//  function validateForm(){
//     alert("Submit")
//  }