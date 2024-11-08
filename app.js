function login() {
    let correctname = 'mh12446@gmail.com';
    let correctpassword = '1234';

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === correctname && password === correctpassword) {
        window.location.href = "succes.html";
        alert("Login Succesfuly!")

    } else {
        alert("Login Failed")
    }
}