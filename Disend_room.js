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

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });


    localStorage.setItem("room_name", room_name);

    window.location = "Disend_page.html";
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_id' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData(); 

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Disend_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}