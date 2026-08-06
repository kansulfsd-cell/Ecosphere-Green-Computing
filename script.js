const popup = document.getElementById("welcome-popup");
const closeBtn = document.getElementById("closePopup");

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Start Journey Button
const startBtn = document.querySelector(".hero button");

startBtn.addEventListener("click", function () {

    startBtn.innerHTML = "🌱 Journey Started";
    startBtn.style.background = "#00ff99";
    startBtn.style.color = "#000";

    document.querySelector(".climate").scrollIntoView({
        behavior: "smooth"
    });

});

// Smooth Button Animation
startBtn.addEventListener("mouseover", function () {
    startBtn.style.transform = "scale(1.1)";
});

startBtn.addEventListener("mouseout", function () {
    startBtn.style.transform = "scale(1)";
});

// Navbar Active Effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.style.color = "white");

        this.style.color = "#7CFC00";

    });

});

function calculateCarbon(){

    let travelInput = document.getElementById("travel").value;
    let electricityInput = document.getElementById("electricity").value;

    if (travelInput === "" || electricityInput === "") {
        document.getElementById("result").innerHTML = "Please enter all values.";
        return;
    }

    let travel = Number(travelInput);
    let electricity = Number(electricityInput);

    let score = travel + electricity;

    let result = document.getElementById("result");

    if(score <= 100){
        result.innerHTML = "🟢 Low Carbon Footprint";
        result.style.color = "#7CFC00";
    }
    else if(score <= 250){
        result.innerHTML = "🟡 Medium Carbon Footprint";
        result.style.color = "#FFD700";
    }
    else{
        result.innerHTML = "🔴 High Carbon Footprint";
        result.style.color = "#FF5252";
    }

}
