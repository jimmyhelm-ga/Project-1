


document.addEventListener("DOMContentLoaded", function() {
    //divs
    const hiddenContent = document.querySelector(".atFirstHidden");
    const fireAnimation = document.querySelector(".fireAnimation");
    const exitSerenityModeDiv = document.querySelector(".exitSerenityMode");
    const fireButtons = document.querySelector(".fire");
    const poemButtons = document.querySelector(".poemButtons");
    const header = document.querySelector("header");
    const timerDiv = document.querySelector(".timer");
    const textBoxDiv = document.querySelector(".textBoxDiv")


    //buttons
    const startButton = document.getElementById("startFire");
    const stokeButton = document.getElementById("stokeFire");
    const serenityModeButton = document.getElementById("serenityMode");
    const exitSerenityModeButton = document.getElementById("exitSerenityMode");
    const writePoemButton = document.getElementById("writePoem");
    const putOutFireButton = document.getElementById("putOutFire");

    
//timer
let count = 60;
const timer = setInterval(function() {
    count--;
    timerDiv.innerHTML = count;
    if (count === 0) {
        clearInterval(timer); 
        hiddenContent.style.display = "none";
        timerDiv.style.display = "none";
        fireAnimation.style.display = "none";

        const smokeAnimation = document.createElement("img");
            smokeAnimation.src = "https://www.animationsoftware7.com/img/agifs/smoke04.gif";
            document.body.appendChild(smokeAnimation);
        
            const gameOverButton = document.createElement("button");
            gameOverButton.textContent = "The Fire Went Out. Click Here to Start Again.";
            gameOverButton.classList.add("gameOverButton"); // Add a class for styling
            gameOverButton.addEventListener("click", function() {
                location.reload(); // Reload the page
            });
    
        document.body.appendChild(gameOverButton);

    }
}, 1000);
        
    
    

    //img
    const fireImage = document.getElementById("fireAnimation");
    

   
   
    startButton.addEventListener("click", function() {
        startButton.style.display = "none";
        hiddenContent.style.display = "block";
        header.style.display = "none";
        textBox.value = "You started the fire!";
        timerDiv.style.display = "block";
        count = 60;
        timerDiv.innerHTML = count;
  
    });

    stokeButton.addEventListener("click", function() {
        fireImage.src = "https://i.gifer.com/origin/d9/d9dd657cfef3fb5188596ace989a7dd7_w200.gif";
        textBox.value += "\nYou stoked the fire!";
        count = 60;
        timerDiv.innerHTML = count;
        
    });

    serenityModeButton.addEventListener("click", function() {
        hiddenContent.style.display = "block";
        serenityModeButton.style.display = "none";
        fireAnimation.style.display = "block";
        exitSerenityModeDiv.style.display = "block";
        fireButtons.style.display = "none";
        timerDiv.style.display = "none";
        textBoxDiv.style.display = "none"
    });

    exitSerenityModeButton.addEventListener("click", function() {
        hiddenContent.style.display = "block";
        startButton.style.display = "none";
        serenityModeButton.style.display = "block";
        fireAnimation.style.display = "none";
        exitSerenityModeDiv.style.display = "none";
        fireButtons.style.display = 'flex'
        fireAnimation.style.display = "flex";
        textBoxDiv.style.display = "block";
        count = 60;
        timerDiv.innerHTML = count;
        timerDiv.style.display = "block";
        
    });

    putOutFireButton.addEventListener("click", function() {
        fireImage.src = "https://www.animationsoftware7.com/img/agifs/smoke04.gif";
        timerDiv.style.display = "none";
        startButton.style.display = "none";
        textBoxDiv.style.display = "none";


    const gameOverButton = document.createElement("button");
        gameOverButton.textContent = "The Fire Went Out. Click Here to Start Again.";
        gameOverButton.classList.add("gameOverButton"); // Add a class for styling
        gameOverButton.addEventListener("click", function() {
            location.reload(); // Reload the page
        });

    document.body.appendChild(gameOverButton);

        serenityModeButton.style.display = "none";
        exitSerenityModeDiv.style.display = "none";
        fireButtons.style.display = "none";
        poemButtons.style.display = "none";

        
    });

    writePoemButton.addEventListener("click", function() {
        textBox.value = "";
        textBox.focus();
    });


    
});