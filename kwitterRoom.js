const firebaseConfig = {
    apiKey: "AIzaSyAdV588M1fJBK3szxIw50bmO9mnP8PWg9Q",
    authDomain: "kwitter-152ae.firebaseapp.com",
    databaseURL: "https://kwitter-152ae-default-rtdb.firebaseio.com",
    projectId: "kwitter-152ae",
    storageBucket: "kwitter-152ae.appspot.com",
    messagingSenderId: "1074930244541",
    appId: "1:1074930244541:web:bc193e198760ad5af5d0d4"
  };
 
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
