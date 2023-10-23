function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var buttons = document.getElementsByClassName("btn-outline-secondary");
var checkoutList = [];

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    console.log(button.id);
    button.addEventListener("click", function(e) {
        checkoutList.push(e.target.id);
        console.log(e.target.id);
        setCookie("People", JSON.stringify(checkoutList), 2);
    });
}

document.getElementById("packages").addEventListener("click", function(){
  if (checkoutList.length > 0) {
    window.location.href = "reformationPlan.html";
  }
})
