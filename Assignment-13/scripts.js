import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var nameV, emailV, msgV;

const db = getDatabase();

// Reference
// Getting data from Textboxes

var NameBox = document.getElementById("nameBox");
var EmailBox = document.getElementById("emailBox");
var MsgBox = document.getElementById("msgBox");

// Button References

function sendData(event) {
  event.preventDefault();
  readFormData();
  if (nameV == "" && emailV == "" && msgV == "") {
    alert("Fields can not be blank");
  } else {
    // Code to send the data to Firebase
    set(ref(db, "data/" + nameV), {
      name: nameV,
      email: emailV,
      message: msgV,
    })
      .then(() => {
        alert("Data Send Successfully");
      })
      .catch((error) => {
        alert("Unsccussful", error);
      });

    clearFormData();
  }
}

// Code to read the data from Firebase

// Read Data from Form

function readFormData() {
  nameV = NameBox.value;
  emailV = EmailBox.value;
  msgV = MsgBox.value;
  console.log(nameV, emailV, msgV);
}

// Clear Form after data Submission

function clearFormData() {
  NameBox.value = "";
  EmailBox.value = "";
  MsgBox.value = "";
}

document.querySelectorAll(".btn")[0].onclick = sendData;