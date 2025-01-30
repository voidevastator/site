document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "https://via.placeholder.com/300?text=Image+1",
        "https://via.placeholder.com/300?text=Image+2",
        "https://via.placeholder.com/300?text=Image+3",
        "https://via.placeholder.com/300?text=Image+4",
        "https://via.placeholder.com/300?text=Image+5"
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];

    var imageElement = document.createElement("img");
    imageElement.src = randomImage;

    var imageContainer = document.getElementById("random-image");
    imageContainer.appendChild(imageElement);
});
