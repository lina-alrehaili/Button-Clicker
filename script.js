const { func } = require("prop-types");

function logout(element){
    element.innerText="Logout";
}

function hide(element){
    element.remove();
}

function showLike(element){
    alert("Ninja was liked");
}
