function login(){

    let user =
    document.getElementById("user").value;

    if(user===""){
        alert("Enter username");
        return;
    }

    alert("Welcome " + user);
}