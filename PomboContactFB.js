var firebaseConfig = {
    apiKey: "AIzaSyC6LtdxQSZEjWd6p02JAlkABkacJKx4WyE",
    authDomain: "contactform-93f91.firebaseapp.com",
    databaseURL: "https://contactform-93f91.firebaseio.com",
    projectId: "contactform-93f91",
    storageBucket: "contactform-93f91.appspot.com",
    messagingSenderId: "232680294518",
    appId: "1:232680294518:web:15c8c749321d0f53dfb757",
    measurementId: "G-35L2G2C2LN"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("messages");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var email = getInputVal('emailAdress');
  var message = getInputVal('contactMessage');

  if (name != "" && email != "" && message != "") {
    saveMessage(name, email, message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(function(){
      document.querySelector(".alert").style.display = "none";
    },3000);

    document.getElementById("contactForm").reset();
  }
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  })
}
