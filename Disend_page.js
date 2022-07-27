// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4e7CQbnRNecOZlj-zJZ657Dk6jZQEQNM",
    authDomain: "disend-7569b.firebaseapp.com",
    databaseURL:"https://disend-7569b-default-rtdb.firebaseio.com",
    projectId: "disend-7569b",
    storageBucket: "disend-7569b.appspot.com",
    messagingSenderId: "1023230371228",
    appId: "1:1023230371228:web:fd364a6d8d374c7f9ed459"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
}