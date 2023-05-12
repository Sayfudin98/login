function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  
  if (user=="admin" && pass=="admin"){
    alert("Selamat anda berhasil login!");
  }else{
    alert("Login anda gagal!");
  }
}