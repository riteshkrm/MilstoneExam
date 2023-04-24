const password = prompt("Enter you password");
const confirmpassword = prompt("Confirm your password");

if (password === confirmpassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
  alert("Password didn't match. Password validation unsuccessful")
}
