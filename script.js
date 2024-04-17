
function boom(e) {
    const note = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!note)
        return;
    note.currentTime = 0;
    note.play();
    key.classList.add('playing');
}

function remove(e) {
    if (e.propertyName !== "transform") 
        return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend',remove));
window.addEventListener('keydown', boom);