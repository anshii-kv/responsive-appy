const animation = document.querySelector('#rotate');
window.addEventListener('scroll', function() {
    const value = this.window.scrollY *0.35;
    animation.style.transform  = `rotate(${value}deg)`;
})
