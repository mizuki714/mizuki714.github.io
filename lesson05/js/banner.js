var dismissibleItem = function (el, type, value) {
    var html = '<span>' + value + '<button type="button" class="close>x</button></span>';
    el.classList.add('dismissible', 'dismissible-' + type);
    el.innerHTML = html;
};
el.removeAttribute('data-component');
el.removeAttribute('data-type');
el.removeAttribute('data-value');

function dismissiveBanner(event) {
    var height = el.offsetHeight,
        opacity = 1,
        timeout = null;

    function reduceHeight() {
        height -= 2;
        el.setAttribute('Style', 'height: ' + height + 'px; opacity: ' + opacity);
        if (height <= 0) {
            window.clearInterval(timeout);
            timeout = null;
            el.remove();
        }
    }

    function fade() {
        opacity -= .1;
        el.setAttribute('style', 'opacity: ' + opacity);
        if (opacity <= 0) {
            window.clearInterval(timeout);
            timeout = window.setInterval(reduceHeight, 1)
        }
    }
    timeout = window.setInterval(fade, 25);
}
el.querySelector('.close').addEventListener('click', dismissiveBanner);