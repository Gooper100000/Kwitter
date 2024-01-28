//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBRq9Kr18qeuJklDOItbCEBTfDeJjJ4X-U",
      authDomain: "kwitter-app-f796a.firebaseapp.com",
      databaseURL: "https://kwitter-app-f796a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f796a",
      storageBucket: "kwitter-app-f796a.appspot.com",
      messagingSenderId: "764476122894",
      appId: "1:764476122894:web:d7b9f334d4c737d93ed95f",
      measurementId: "G-RVLLWFC9M4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
username = localStorage.getItem("username")
room_name = localStorage.getItem("roomname")
function send(){
      msg = document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      })
      document.getElementById("message").value = ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
name_width_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_width_tag = "<h4 class='message_h4'>"+message+"</h4>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>"
span_width_tag="<span class='glyphicon glyphicon-thumps-up'> like:"+like+"</span> </button> <hr>"
row = name_width_tag + message_width_tag + like_button + span_width_tag
document.getElementById("output").innerHTML+= row
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
       window.location.replace("index.html")
}
function update_like(message_id){
      button_id=message_id
      likes = document.getElementById(button_id).value 
      updated_likes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}