document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    const cookieText = document.getElementById("cookieText");

    button.addEventListener("click", function() {
        cookieText.classList.toggle("hidden");
    });
});
