const menuButton = document.getElementById("menuBtn");
const navigation = document.getElementById("nav");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});