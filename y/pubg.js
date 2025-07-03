// Theme switching (robust, simple)
document.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.onclick = function() {
            document.body.classList.toggle('light');
        };
    }

    // Lightbox/Modal for zooming images (maps and gallery only)
    if (!document.querySelector('.lightbox')) {
        var lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img src="" alt="Zoomed">';
        document.body.appendChild(lightbox);
    }
    var lightbox = document.querySelector('.lightbox');
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        lightbox.classList.add('active');
    }
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    }
    closeBtn.onclick = closeLightbox;
    lightbox.onclick = function(e) {
        if (e.target === lightbox) closeLightbox();
    };

    // Only enable zoom for .map-card img and .gallery img
    var zoomImgs = document.querySelectorAll('.map-card img, .gallery img');
    for (var i = 0; i < zoomImgs.length; i++) {
        zoomImgs[i].style.cursor = 'zoom-in';
        zoomImgs[i].onclick = function() {
            openLightbox(this.src, this.alt);
        };
    }
});
