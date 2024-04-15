
document.addEventListener("DOMContentLoaded", function() {
    //divs
    const hiddenContent = document.querySelector(".atFirstHidden");
    const fireAnimation = document.querySelector(".fireAnimation");
    const exitSerenityModeDiv = document.querySelector(".exitSerenityMode");
    const fireButtons = document.querySelector(".fire");
    const poemButtons = document.querySelector(".poemButtons");


    //buttons
    const startButton = document.getElementById("startFire");
    const stokeButton = document.getElementById("stokeFire");
    const serenityModeButton = document.getElementById("serenityMode");
    const exitSerenityModeButton = document.getElementById("exitSerenityMode");
    const writePoemButton = document.getElementById("writePoem");
    const putOutFireButton = document.getElementById("putOutFire");

    //img
    const fireImage = document.getElementById("fireAnimation");

   
   
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        hiddenContent.style.display = "block";
        textBox.value = "You started the fire!";
    });

    stokeButton.addEventListener("click", function() {
        fireImage.src = "https://i.gifer.com/origin/d9/d9dd657cfef3fb5188596ace989a7dd7_w200.gif"
        textBox.value = "You stoked the fire!";
    });

    serenityModeButton.addEventListener("click", function() {
        hiddenContent.style.display = "block";
        serenityModeButton.style.display = "none";
        fireAnimation.style.display = "block";
        exitSerenityModeDiv.style.display = "block";
        fireButtons.style.display = "none";
        poemButtons.style.display = "none";
    });

    exitSerenityModeButton.addEventListener("click", function() {
        hiddenContent.style.display = "block";
        startButton.style.display = "none";
        serenityModeButton.style.display = "block";
        fireAnimation.style.display = "none";
        exitSerenityModeDiv.style.display = "none";
        fireButtons.style.display = 'block'
        fireAnimation.style.display = "block";
        poemButtons.style.display = "block";
        
    });

    putOutFireButton.addEventListener("click", function() {
        textBox.value = "You Put Out the Fire. The Simulation Has Ended.";
        fireAnimation.style.display = "none";
    });

    writePoemButton.addEventListener("click", function() {
        console.log('hitting!')
        textBox.value = "";
        textBox.focus();
    });

    
});