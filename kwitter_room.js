const firebaseConfig = {
      apiKey: "AIzaSyDR4xiGhKFLukP-ykncWkawuAk5vDx2C3s",
      authDomain: "kwitter-d8e5a.firebaseapp.com",
      databaseURL: "https://kwitter-d8e5a-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8e5a",
      storageBucket: "kwitter-d8e5a.appspot.com",
      messagingSenderId: "481608713245",
      appId: "1:481608713245:web:9348188de544949f21f2f4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

      