window.addEventListener("scroll", fixedbar);

function fixedbar() {
  if (window.scrollY > 200) {
    document.getElementById("textsearch").classList.add("fixedTop");
    var inputElement = document.getElementsByClassName("input_informations")[0];
    if (inputElement) {
      inputElement.removeAttribute("id");
    }
  } else {
    document.getElementById("textsearch").classList.remove("fixedTop");
    var inputElement = document.getElementsByClassName("input_informations")[0];
    if (inputElement) {
      inputElement.setAttribute("id", "input_informations");
    }
  }
}