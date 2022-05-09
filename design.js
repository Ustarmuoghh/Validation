console.log("Hi")
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Subject = document.getElementById("subject");
const Message = document.getElementById("message");
const submitElement = document.getElementById("sendMessage");

const NameLabel = document.getElementById("NameLabel");
const EmailLabel = document.getElementById("EmailLabel");
const SubjectLabel = document.getElementById("SubjectLabel");
const MessageLabel = document.getElementById("MessageLabel");

const submitForm = () => {
  //alert("Hello World")
  if (Name.value.length === 0) {
    NameLabel.innerHTML = "name is required";
    NameLabel.style.color = "red";
    return;
   }
const NameLength = Name.value.length;
  if (NameLength >= 15) {
    NameLabel.innerHTML = "Invalid";
    NameLabel.style.color = "red";
    return;
   }

  if (Email.value.length === 0) {
    EmailLabel.innerHTML = "Email is required";
    EmailLabel.style.color = "red";
    return;
   }
const EmailLength = Email.value.length;
  if (EmailLength <= 10) {
    EmailLabel.innerHTML = "Invalid Email";
    EmailLabel.style.color = "red";
    return;
   }

  if (Subject.value.length === null) {
    SubjectLabel.innerHTML = "Subject is required";
    SubjectLabel.style.color = "red";
    return;
   }
const SubjectLength = Subject.value.length;
  if (SubjectLength <= 10) {
    SubjectLabel.innerHTML = "Invalid Subject";
    SubjectLabel.style.color = "red";
    return;
   }

  if (MessageLabel.length === null){
     MessageLabel.innerHTML = "Kindly put in your Message";
     MessageLabel.style.color = "red";
     return;
  }

}

submitElement.addEventListener("click", submitForm, false)








