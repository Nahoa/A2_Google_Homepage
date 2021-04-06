//This function Toggles the dropdown menu on and off when clicked
function displayContent() {
  document.getElementById("dropdown-content").classList.toggle("show");
}

// This function removes the dropdown menu when the user clicks on something other than the Settings anchor
window.onclick = function (event) {
  if (!event.target.matches(".settings-link")) {
    var dropdowns = document.getElementsByClassName(
      "settings-dropdown-content"
    );
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
