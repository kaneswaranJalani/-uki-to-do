
    let dropdown = document.getElementById("mySelect");
    dropdown.addEventListener("change", function() {
        document.getElementById(para).innerHTML=("You selected: " + dropdown.value);
  });
  //<button onclick="removeUsername()">Remove Username</button>


  function removeUsername() {
    localStorage.removeItem("username");
    alert("Username removed from localStorage!");
  }


localStorage.setItem("user", JSON.stringify(userData));

    message.innerText = "Your registration was successful!";
    message.style.color = "green";
{


  function showMessage() {
    document.getElementById("message").innerText = "✅ This message is shown inside a paragraph!";
  }
}
