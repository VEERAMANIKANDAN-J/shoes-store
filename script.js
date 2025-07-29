const shoes = [
    { id: 1, image: "1.png" },
    { id: 2, image: "2.png" },
    { id: 3, image: "3.png" },
    { id: 4, image: "4.png" }
];

const mainImage = document.querySelector('.shoe-image');
const icons = document.querySelectorAll('.icon'); // Changed from singular `icon` to plural

function updateImage(shoeId) {
    const selectedShoe = shoes.find(shoe => shoe.id === shoeId);
    if (selectedShoe) {
        mainImage.src = selectedShoe.image;

        icons.forEach(icon => icon.classList.remove('active'));
        document.querySelector(`[data-shoe="${shoeId}"]`).classList.add('active'); // Fixed selector
    }
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const shoeId = parseInt(icon.getAttribute('data-shoe'));
        updateImage(shoeId);
    });
});
