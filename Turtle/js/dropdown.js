function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
  var targetElement = event.target;
  if (!targetElement.closest(".dropdown")) {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.style.display = "none";
  }
});
