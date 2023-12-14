document.addEventListener("DOMContentLoaded", function () {
    const artGallery = document.getElementById("art-gallery");

    // Example art data
    const artItems = [
        { name: "Artwork 1", image: "art1.jpg", price: 100 },
        { name: "Artwork 2", image: "art2.jpg", price: 150 },
        { name: "Artwork 3", image: "art2.jpg", price: 150 },
		{ name: "Artwork 4", image: "art2.jpg", price: 150 },
		{ name: "Artwork 5", image: "art2.jpg", price: 150 },
		{ name: "Artwork 6", image: "art2.jpg", price: 150 },
		{ name: "Artwork 7", image: "art2.jpg", price: 150 },
		{ name: "Artwork 8", image: "art2.jpg", price: 150 },
		{ name: "Artwork 9", image: "art2.jpg", price: 150 },
		{ name: "Artwork 10", image: "art2.jpg", price: 150 },
		{ name: "Artwork 11", image: "art2.jpg", price: 150 },
		{ name: "Artwork 12", image: "art2.jpg", price: 150 },
		{ name: "Artwork 13", image: "art2.jpg", price: 150 },
		{ name: "Artwork 14", image: "art2.jpg", price: 150 },
		{ name: "Artwork 15", image: "art2.jpg", price: 150 },
		{ name: "Artwork 16", image: "art2.jpg", price: 150 },
		{ name: "Artwork 17", image: "art2.jpg", price: 150 },
    ];

    // Populate the art gallery
    artItems.forEach(item => {
        const artItemElement = createArtItemElement(item);
        artGallery.appendChild(artItemElement);
    });
});

function createArtItemElement(art) {
    const artItem = document.createElement("div");
    artItem.className = "art-item";

    const img = document.createElement("img");
    img.src = art.image;
    img.alt = art.name;

    const name = document.createElement("p");
    name.textContent = art.name;

    const price = document.createElement("p");
    price.textContent = `$${art.price}`;

    const buyButton = document.createElement("button");
    buyButton.className = "button";
    buyButton.textContent = "Buy";
    buyButton.addEventListener("click", function () {
        alert(`You bought ${art.name} for $${art.price}`);
    });

    artItem.appendChild(img);
    artItem.appendChild(name);
    artItem.appendChild(price);
    artItem.appendChild(buyButton);

    return artItem;
}
