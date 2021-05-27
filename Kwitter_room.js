var firebaseConfig = {
    apiKey: "AIzaSyAzbu9l8K8E5Gkg5SWEWVad5roNPzd8hkY",
    authDomain: "kwitter-3223e.firebaseapp.com",
    databaseURL: "https://kwitter-3223e-default-rtdb.firebaseio.com",
    projectId: "kwitter-3223e",
    storageBucket: "kwitter-3223e.appspot.com",
    messagingSenderId: "687115565962",
    appId: "1:687115565962:web:3eb5bd86a108c8245c6673"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");

  document.getElementById("welcome_username").innerHTML = "Welcome" + user_name + "!";
  
function addRoom()
{
  roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  
  firebase.database().ref("/").child(roomName).update({
    purpose:'adding user room'
  });

  window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);

 });});}
getData();