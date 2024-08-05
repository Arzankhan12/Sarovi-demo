document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = image.src;
            modal.classList.add('fadeIn');
            modal.classList.remove('fadeOut');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('fadeOut');
        modal.classList.remove('fadeIn');
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    });

    modal.addEventListener('click', (event) => {
        if (event.target !== modalImg && event.target !== closeBtn) {
            modal.classList.add('fadeOut');
            modal.classList.remove('fadeIn');
            setTimeout(() => {
                modal.style.display = "none";
            }, 500);
        }
    });
});
