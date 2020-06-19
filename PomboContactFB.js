var firebaseConfig = {
  apiKey: "AIzaSyAF6t6Kd3kMo8RvmaHrGn5qiXv1oQJf3Ho",
  authDomain: "contactform-42df0.firebaseapp.com",
  databaseURL: "https://contactform-42df0.firebaseio.com",
  projectId: "contactform-42df0",
  storageBucket: "contactform-42df0.appspot.com",
  messagingSenderId: "437354160799",
  appId: "1:437354160799:web:1f0326f02b994c36c6f8aa",
  measurementId: "G-BXMR7VFP90"
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

  saveMessage(name, email, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(function(){
    document.querySelector(".alert").style.display = "none";
  },3000);

  document.getElementById("contactForm").reset();
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
