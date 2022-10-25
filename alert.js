const active = document.querySelectorAll('.active');
const inactive = document.querySelectorAll('.inactive');
const post = document.getElementById('post');
const badge = document.querySelector('.sort');
const note = document.getElementById('note');

badge.addEventListener('click', () => {
    for (i = 0; i < active.length; i++) {
        active[i].classList.toggle('inactive')
        if(!active[i].classList.contains('inactive')) {
            note.innerText = active.length
        } else {
            note.innerText = 0
        }
    }
})

post.addEventListener('mouseenter', () => {
    post.style.backgroundColor = 'hsl(205, 33%, 90%)';
})

post.addEventListener('mouseleave', () => {
    post.style.backgroundColor = 'hsl(0, 0%, 100%)';
})




