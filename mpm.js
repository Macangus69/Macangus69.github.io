document.getElementById("genButton").addEventListener('click', function() {
    document.getElementById("addHere").innerHTML = document.getElementById("addHere").innerHTML + "<div class='col'><div class='card shadow-sm'><img src='" + document.getElementById("link").value + "'><div class='card-body'><p class='card-text'>" + document.getElementById("statement").value + "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button type='button' class='btn btn-sm btn-outline-secondary' id='Xena McKenzie'data-bs-toggle='modal' data-bs-target='#staticBackdrop'>" + document.getElementById("profession").value + "</button></div></div></div></div></div>";
    document.getElementById("codeToCopy").textContent = "<div class='col'><div class='card shadow-sm'><img src='" + document.getElementById("link").value + "'><div class='card-body'><p class='card-text'>" + document.getElementById("statement").value + "</p><div class='d-flex justify-content-between align-items-center'><div class='btn-group'><button type='button' class='btn btn-sm btn-outline-secondary' id='Xena McKenzie'data-bs-toggle='modal' data-bs-target='#staticBackdrop'>" + document.getElementById("profession").value + "</button></div></div></div></div></div>";
  });