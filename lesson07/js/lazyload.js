const imagesLoading = document.querySelectorAll("img[data-src]");
//parameters for intersection observer
const imageOptions = {
    threshold: 0,
    rootMargin: "0px, 0px, 50px 0px"
};

const preloadImage = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {});
    }, imageOptions);


    imagesLoading.forEach(img => {
        imageObserver.observe(img);
    });
} else {}