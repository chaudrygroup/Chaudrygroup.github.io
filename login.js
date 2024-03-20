function login() {
  var email = document.getElementById('emaill').value;
  var password = document.getElementById('passwordl').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Login successful"); // Ensure this alert is inside the .then() block
      // Redirect to another page or perform other actions here
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
}
