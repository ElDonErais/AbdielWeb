function changeColor() {
    var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.style.backgroundImage = randomColor;
}