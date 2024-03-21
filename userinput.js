/*<h1 id="myh1">Welcome</h1>
<label>Username:</label>
<input id="mytext"><br><br>
<button id="mySubmitBtn">Submit</button>
*/
let username;

document.getElementById("mySubmitBtn").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Welcome! ${username}`

}
