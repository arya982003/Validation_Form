function myFun(){
    // if(username()==true){
    //     emailFunction()
    // }


    var firstName = document.getElementById("inputfname").value;
  var lastName = document.getElementById("inputlname").value;
  var email = document.getElementById("inputemail").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var countryName = document.getElementById("country-select").value;

  if (firstName == "") {
    document.getElementById("sms1").innerHTML = "**First name cannot be empty";
  }
  if (lastName == "") {
    document.getElementById("sms2").innerHTML = "**Last name cannot be empty";
  }
  if (email == "") {
    document.getElementById("sms3").innerHTML = "**Email cannot be empty";
  }
  if (pass1 == "") {
    document.getElementById("sms4").innerHTML = "**Password cannot be empty";
  }
  if (pass2 == "") {
    document.getElementById("sms5").innerHTML = "**Confirm password cannot be empty";
  }
  if (countryName == "") {
    document.getElementById("countryError").innerHTML =
      "**Country field cannot be empty";
    document.getElementById("phoneError").innerHTML = "Enter phone number";
  }

    validateGender();
    validateLanguage();
    checkImageUpload();
    checkDocumentUpload();
    checkAddressEmpty();
     checkDobEmpty();
    // checkQualificationEmpty();
    
    if(firstname()==false){
       return false;
    }
    if(lastname()==false){
        return false;
    }
    if(emailFunction()==false){
        return false;
    }
    if(validatePhone()==false){
      return false;
    }
    if(validateCaptcha()==false){
        return false;
    }
    return true;
}

function firstname(){
    var user = document.getElementById("inputfname").value;
    // var regUser = /^[A-Z][a-zA-Z0-9 . -Æ]{5,18}/gm;
    var regUser = /^(?!.*?(.)\1{2})[A-Z][a-zA-Z0-9 \-Æ]{0,17}[a-zA-Z0-9\-Æ]$/gi;

    if (regUser.test(user) && !/[@#$<>/=+*.~,`!%^&();'"?_{}[]/gm.test(user)) {
      document.getElementById("sms1").innerHTML = " ";
    } else {
      if (user.charAt(0) !== user.charAt(0).toUpperCase()) {
        document.getElementById("sms1").innerHTML = "First character should be capital";
      }else if (/([A-Za-z])\1\1/.test(user)) {
        document.getElementById("sms1").innerHTML = "First name should not contain the same character consecutively three or more times.";
      }else if(/[@#$<>/=+*.~,`!%^&();'"?_{}[]/gm.test(user)){
        document.getElementById("sms1").innerHTML = "First name should not contain symbols like @,#,$,<,>,/,.,=,+,*,~,`,!,%,^,&,(,),;,',?,_,[,{,}";
      }
      else if (/\]/.test(user)) {
        document.getElementById("sms1").innerHTML = "First name should not contain the ']' character.";
      } else if (/\\/.test(user)) {
        document.getElementById("sms1").innerHTML = "First name should not contain the \\ character.";
      } 
      
      else {
        //document.getElementById("sms1").innerHTML = "Invalid First name";
      }
     // alert("I am executing");
     // document.getElementById("sms1").innerHTML = "Invalid First name";
      // alert("Wrong Username");
      return false;
    }
}

function lastname(){
    var user = document.getElementById("inputlname").value;
    var regUser = /^(?!.*?(.)\1{2})[A-Z][a-zA-Z .]{1,18}$/gm;     
    if(user=="."){
        document.getElementById("sms2").innerHTML=" "; 
        return true;

    }
    if(regUser.test(user)){
        document.getElementById("sms2").innerHTML=" ";
    }
    else{
      if (user.charAt(0) !== user.charAt(0).toUpperCase()) {
        document.getElementById("sms2").innerHTML = "First character should be capital";
      }else if (/([A-Za-z])\1\1/.test(user)) {
        document.getElementById("sms2").innerHTML = "Last name should not contain the same character consecutively three or more times.";
      }else if(/[@#$<>/=+*.~,`!%^&();'"?_{}[]/gm.test(user)){
        document.getElementById("sms2").innerHTML = "Last name should not contain symbols like @,#,$,<,>,/,.,=,+,*,~,`,!,%,^,&,(,),;,',?,_,[,{,}";
      }
      else if (/\]/.test(user)) {
        document.getElementById("sms2").innerHTML = "Last name should not contain the ']' character.";
      } else if (/\\/.test(user)) {
        document.getElementById("sms2").innerHTML = "Last name should not contain the \\ character.";
      } 
      
      else {
        //document.getElementById("sms2").innerHTML = "Invalid Last name";
      }
     // alert("I am executing");
     // document.getElementById("sms2").innerHTML = "Invalid Last name";
      // alert("Wrong Username");
      return false;
    }
}

function emailFunction(){
    var email = document.getElementById("inputemail").value;
    
    var regEmail = /[a-zA-Z0-9][a-zA-Z0-9._]{3,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z.]{2,5}/gm;

    //Checking Email domain repetition
    let myArr = email.split('.');
    if(myArr[myArr.length-1]===(myArr[myArr.length-2])){
        document.getElementById("sms3").innerHTML="**Repetition of domain are not allowed";
        return false;
    }
    if(email==""){
        document.getElementById("sms3").innerHTML="Please enter email";
        //return false;
    }
    if(regEmail.test(email)){
        document.getElementById("sms3").innerHTML=" ";
    }
    else{
        document.getElementById("sms3").innerHTML="Invalid Email(Email must in form of arrr123@gmail.com or arr12@gmail.com.in)";
        return false;
    }

}

function password() {
    var pass1 = document.getElementById("pass1").value;
    var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{7,20}$/gm;

    if (regPassword.test(pass1)) {
        document.getElementById("sms4").innerHTML = "";
    }
    else {
        document.getElementById("sms4").innerHTML = "**Password must contain at least one letter and one number, and must be between 8 and 20 characters long.";
        return false;
    }
 
}

function validateGender() {
  let genderRadios = document.getElementsByName("radiogen");
  let isSelected = false;
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      isSelected = true;
      break;
    }
  }
  if (!isSelected) {
    //alert("Gender is required");
    document.getElementById("genderError").innerHTML =
      "**Please select gender!";
    return false;
  } else {
    //alert("Gender is selected");
    document.getElementById("genderError").innerHTML = " ";
  }
}

function conpassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if(pass1!=pass2){
        document.getElementById("sms5").innerHTML="**Passwords are not same!";
        return false;
    }
    else{
        document.getElementById("sms5").innerHTML="";
    }
}

function checkAddressEmpty() {
  var addressInput = document.getElementById("address");
  var addressError = document.getElementById("sms7");
  if (!addressInput.value) {
    // Show an error message if the date input is empty
    addressError.textContent = "Please enter your address";
  } else {
    // Clear the error message if the date input is valid
    addressError.textContent = "";
  }
}

function dbirth(){
    
		var dobInput = document.getElementById("inputdob");

		var today = new Date();
		var yyyy = today.getFullYear();
		var mm = today.getMonth() + 1; //
		var dd = today.getDate() - 1;
		if (mm < 10) {
			mm = '0' + mm;
		}
		if (dd < 10) {
			dd = '0' + dd;
		}
        var maxDate = yyyy + '-' + mm + '-' + dd;
		dobInput.max = maxDate;

		// Set the min attribute to 100 years ago from today's date
		var minDate = (yyyy - 100) + '-' + mm + '-' + dd;
		dobInput.min = minDate;
}
function checkDobEmpty() {
  var dobInput = document.getElementById("inputdob");
  var dobError = document.getElementById("sms6");
  if (!dobInput.value) {
    // Show an error message if the date input is empty
    dobError.textContent = "Please enter your date of birth";
  } else {
    // Clear the error message if the date input is valid
    dobError.textContent = "";
  }
}

function validatePhone() {
  const countrySelect = document.getElementById("country-select");
  const phoneInput = document.getElementById("inputphone");
  const codeInput = document.getElementById("inputcode");

  if (countrySelect.value != "") {
    document.getElementById("countryError").innerHTML = "";
  }

  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    document.getElementById("countryError").innerHTML = "";
    let countryCode = "";
    var maxLength = "";

    switch (selectedCountry) {
      case "us":
        countryCode = "+1";
        phoneInput.setAttribute("maxlength", "10");
        phoneInput.setAttribute("minlength", "10");
        break;
      case "vietnam":
        countryCode = "+84";
        phoneInput.setAttribute("maxlength", "11");
        phoneInput.setAttribute("minlength", "7");
        break;
      case "india":
        countryCode = "+91";
        phoneInput.setAttribute("maxlength", "10");
        phoneInput.setAttribute("minlength", "10");
        break;
      case "china":
        countryCode = "+86";
        phoneInput.setAttribute("maxlength", "11");
        phoneInput.setAttribute("minlength", "11");
        break;
      case "uae":
        countryCode = "+971";
        phoneInput.setAttribute("maxlength", "9");
        phoneInput.setAttribute("minlength", "9");
        break;
      default:
        codeInput.value = "";
        return;
    }

    codeInput.value = countryCode;
    phoneInput.value = "";
    phoneInput.placeholder = "Enter your phone number";

    phoneInput.focus();
  });

  phoneInput.addEventListener("input", () => {
    const selectedCountry = countrySelect.value;
    const phoneNumber = phoneInput.value;
    const regex = getRegexForCountry(selectedCountry);

    if (phoneNumber.match(regex)) {
      phoneInput.setCustomValidity("");
      return true;
    } else {
      //alert("Please enter a valid phone number for your selected  country");
      phoneInput.setCustomValidity(
        "Please enter a valid phone number for your selected  country."
        
      );
      return false;
    }
  });

  phoneInput.addEventListener("keydown", (event) => {
     // Allow only numeric values and backspace key
  if (event.key && isNaN(event.key) && event.key !== 'Backspace') {
    event.preventDefault();
  }
  });

  function getRegexForCountry(countryCode) {
    switch (countryCode) {
      case "us":
        return /\b(?!1)[0-9]{10}\b/gm;
      case "vietnam":
        return /^(03|05|07|08|09)\d{5,9}$/;
      case "india":
        return /^[6789]\d{9}$/gm;
      case "china":
        return /^(13|14|15|16|17|18|19)\d{9}$/;
      case "uae":
        return /^[2-9]\d{1}\d{7}|5[0-9]{1}\d{7}$/gm;
      default:
        return /.*/;
    }
  }
  if (phoneInput.value == "") {
    //alert("Enter Mobile number");
    document.getElementById("phoneError").innerHTML =
      "**Please Enter phone number!";
    return false;
  }

  return true;
}
function imageval(){

    var fileInput = document.getElementById('file');
    
    fileInput.addEventListener('change', function(e) {
       
        var file = fileInput.files[0];
     
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            
            if (file.size <= 2 * 1024 * 1024) {
               
                console.log('File uploaded:', file.name);
                document.getElementById("fileError").innerHTML = " ";
            } else {
                
                fileInput.value = null;
                console.log('File size should be less than or equal to 2MB.');
                alert("File is too large");
                return false;
            }
        } else {
            
            fileInput.value = null;
            alert('Only JPEG, JPG, and PNG images are allowed.');
        }
    });
}

function validateLanguage() {
  let languageCheckboxes = document.getElementsByName("language");
  let isChecked = false;
  for (let i = 0; i < languageCheckboxes.length; i++) {
    if (languageCheckboxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    document.getElementById("languageError").innerHTML =
      "**Please select at least one language!";
    return false;
  } else {
    document.getElementById("languageError").innerHTML = "";
    //return true;
  }
}

function checkImageUpload() {
  let fileInput = document.getElementById("file");
  let fileError = document.getElementById("fileError");
  if (fileInput.value === "") {
    fileError.textContent = "Please select an image less than 2MB";
    // return false;
  }
}

function checkDocumentUpload() {
  let fileInput = document.getElementById("doc");
  let fileError = document.getElementById("documentError");
  if (fileInput.value === "") {
    fileError.textContent = "Please select a document less than 5MB";
    //return  false;
  }
}

function docval(){

    var fileInput = document.getElementById('doc');
    
    fileInput.addEventListener('change', function(e) {
      // Get the selected file
      var file = fileInput.files[0];
      
      // Check if the file is a PDF or DOC/DOCX document
      if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // Check if the file size is less than or equal to 5MB
        if (file.size <= 5 * 1024 * 1024) {
          // File is allowed, do something with it
          console.log('File uploaded:', file.name);
          document.getElementById("documentError").innerHTML = " ";
        } else {
          // File is too large, reset the file input
          fileInput.value = null;
          console.log('File size should be less than or equal to 5MB.');
          alert("File is too large");
          return false;
        }
      } else {
        // File is not allowed, reset the file input
        fileInput.value = null;
        console.log('Only PDF, DOC, and DOCX documents are allowed.');
        alert("File type not allowed");
        return false;
      }
    });
    
  }


function addr(){
    var address1 = document.getElementById('address').value;
    
    const regadd =   /^[a-zA-Z0-9\s\-\.\,\\\/]{3,50}$/gm;
if(address1=="")
{
  document.getElementById("sms7").innerHTML="** please enter address";
  return false;
}
   // alert('Address field is executing');
    if(address1.charAt(0)==" "){
        document.getElementById("sms7").innerHTML="First char as whitespace not allowed";
        //alert('First char as whitespace not allowed');
         return false;
    }
if (regadd.test(address1)) {
    document.getElementById("sms7").innerHTML=" ";
    //alert('Hello1');
} else {
    document.getElementById("sms7").innerHTML="Invalid address";
   
    return false;
}
}

function refreshCaptcha() {
    // Generate a new CAPTCHA code
    var captchaCode = generateCaptchaCode();
  
    // Update the CAPTCHA image and input field
    document.getElementById("captcha-img").src = "https://dummyimage.com/200x50/000/fff&text=" + captchaCode;
    document.getElementById("captcha-input").value = "";
  }
  
  function generateCaptchaCode() {
    // Define allowed characters
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    // Generate a random string of length 8
    var randomString = "";
    for (var i = 0; i < 8; i++) {
      randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    // Apply regular expression to format the string
    var formattedString = randomString.replace(/(\w{4})(\w{2})(\w{2})/, "$1-$2-$3");
  
    return formattedString;
  }

  function validateCaptcha() {
var input = document.getElementById("captcha-input").value.trim();
var captcha = document.getElementById("captcha-img").src.split("=")[1];

if (input == captcha) {
document.getElementById("captcha-feedback").innerHTML = "CAPTCHA validated!";
document.getElementById("captcha-feedback").style.color = "green";
return true;
} else {
document.getElementById("captcha-feedback").innerHTML = "Incorrect CAPTCHA. Please try again.";
document.getElementById("captcha-feedback").style.color = "red";
refreshCaptcha();
return false;
}
}

