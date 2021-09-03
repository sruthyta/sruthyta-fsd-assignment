function validateForm() {
    //collect form data in JavaScript variables
    // var name1 = document.getElementById("fname").value;
    var PassEntry = document.getElementById("PassEntry").value;
    var password2 = document.getElementById("password2").value;

    


    
    //check empty password field
//     if(pw1 == "") {
//         // document.getElementById("message1").innerHTML = "Fill the password please!";
//         alert('Fill the password please');
//         return false;
//       }
    
//   //minimum password length validation
//   if(pw1.length < 6) {
//         // document.getElementById("message1").innerHTML = "Password length must be atleast 6 characters";
//         alert('password length must be atleast 6 characters');
//         return false;
//       }
  
//       //maximum length of password validation
//       if(pw1.length > 8) {
//         // document.getElementById("message1").innerHTML = "Password length must not exceed 8 characters";
//         alert('password length must not exceed 8 characters');
//         return false;
//       }
  
    
      //check empty confirm password field
      if(password2 == "") {
        // document.getElementById("message2").innerHTML = "confirm the password please";
        alert('Please enter confirm password');
        return false;
      } 
     
    
    
      if(PassEntry != password2) {
        // document.getElementById("message2").innerHTML = "Passwords are not same";
        alert('Password did not match: Please try again...');
        return false;
      } else {
        alert ("Password Matched");
        document.write("Welcome to Kerala Tourism website");
      }
   }