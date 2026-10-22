document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-img");
    const lightboxImage = document.getElementById("lightboxImage");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            $('#lightboxModal').modal('show');
        });
    });
});