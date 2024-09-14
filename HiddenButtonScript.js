let randomElement;

function generateButtons() {
    const container = document.getElementById("generateHere");
    const number = document.getElementById("insertNumber").value;
    for (let i = 0; i < number; ++i) {
        const button = document.createElement("button");
        button.innerHTML = "Choose Me";
        button.setAttribute("class", "btn btn-outline-primary");
        button.setAttribute("id", "button" + i);
        button.setAttribute("onclick", "checkWinner(this)");
        container.appendChild(button);
    }
    const elements = document.body.getElementsByClassName("btn btn-outline-primary");
    const index = Math.floor(Math.random() * elements.length);
    randomElement = elements[index];
}

function checkWinner(button) {
    if (button.id === randomElement.id) {
        button.innerHTML = "Winner";
        button.className = "btn btn-success";
    } else {
        button.innerHTML = "Try Again";
        button.className = "btn btn-danger";
    }
}