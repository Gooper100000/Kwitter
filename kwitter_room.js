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
document.getElementById("username").innerHTML = "welcome " + username
function add_room(){
room_name = document.getElementById("room_name").value 

localStorage.setItem("roomname", room_name)
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
})
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirect_room_name(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirect_room_name(name){
      console.log(name)
      localStorage.setItem("roomname", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
       window.location.replace("index.html")
}