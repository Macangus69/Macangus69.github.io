function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
document.getElementById("perm").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Permanant Digestion", "$0"]));window.location.href = "checkout.html";});
document.getElementById("econ").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Economy Digestion", "$20"]));window.location.href = "checkout.html";});
document.getElementById("long").addEventListener("click", function() {setCookie("ref",JSON.stringify(["Long Term Digestion", "$60"]));window.location.href = "checkout.html";});
document.getElementById("short").addEventListener("click", function() {setCookie("ref", JSON.stringify(["Short Term Digestion", "$200"]));window.location.href = "checkout.html";});
document.getElementById("quick").addEventListener("click", function() {setCookie("ref", JSON.stringify(["Quick Digestion", "$500"]));window.location.href = "checkout.html";});
