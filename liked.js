document.addEventListener('DOMContentLoaded', () => {
    loadLikedImages();
});

function loadLikedImages() {
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
    const likedSection = document.querySelector('.liked-images');

    likedImages.forEach(imageUrl => {
        const likedImageElement = document.createElement('img');
        likedImageElement.src = imageUrl;
        likedSection.appendChild(likedImageElement);
    });
}