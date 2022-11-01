function test() {
    //Retreaving The data
    var email = document.getElementById("emailID").value;
    alert(email+" Subscribed Succesfuly!");

    //Storing the data
    var Email = localStorage.setItem("email", email);

    //Retreive stored data
    var Email = localStorage.getItem("email", email);
}