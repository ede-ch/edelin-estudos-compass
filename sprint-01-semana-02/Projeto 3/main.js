document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-content');
    modal.appendChild(modalImage);

    const caption = document.createElement('div');
    caption.id = 'caption';
    modal.appendChild(caption);

    const closeModal = document.createElement('span');
    closeModal.classList.add('close');
    closeModal.innerHTML = '&times;';
    modal.appendChild(closeModal);

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            modal.style.display = 'block'; 
            modalImage.src = img.src; 
            caption.innerHTML = this.querySelector('h3').innerText; 
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
