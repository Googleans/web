document.getElementById('register').addEventListener('submit',function(event)
{
Validate(event)
})
function Validate(event)
{
event.preventDefault();
let isValid=true;
document.getElementById('fname-error').innerHTML="";
document.getElementById('age-error').innerHTML="";
document.getElementById('gender-error').innerHTML="";
document.getElementById('dept-error').innerHTML="";
document.getElementById('email-error').innerHTML="";
document.getElementById('number-error').innerHTML="";
let name=document.getElementById('Firstname').value;
if (name === "") {
document.getElementById('fname-error').innerHTML = "First Name must be filledout";
}
isValid = false;
}
let age = document.getElementById('age').value;
if (age === "" || age <= 0|| age>=120) {
document.getElementById('age-error').innerHTML = "Please enter a valid age";
isValid = false;
}
let genderMale=document.getElementById('Male').checked
let genderFemale = document.getElementById('Female').checked;
if (!genderMale && !genderFemale) {
document.getElementById('gender-error').innerHTML = "Please select yourgender";
isValid = false;
}
let department = document.getElementById('department').value;
if (department === "") {
document.getElementById('dept-error').innerHTML = "Please choose a department";
isValid = false;
}
let email = document.getElementById('email').value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "" || !emailPattern.test(email)) {
document.getElementById('email-error').innerHTML = "Please enter a valid emailaddress";
isValid = false;
}
let number = document.getElementById('number').value;
if (number === "" || number.length < 10) {
document.getElementById('number-error').innerHTML = "Please enter a valid phonenumber (10 digits ISD)";
isValid = false;
}
if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById('Firstname').value = "";
    document.getElementById('age').value = "";
    document.getElementById('Male').checked = false;
    document.getElementById('Female').checked = false;
    document.getElementById('department').selectedIndex = 0;
    document.getElementById('email').value = "";
    document.getElementById('number').value = "";
    }