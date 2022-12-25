const navimg = document.querySelector("#navimg") ;
navimg.addEventListener("click",()=>{
    window.location.replace("https://devaspire.live") ;
})

const section = document.querySelectorAll('section');
const navli = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    navli.forEach( li => {
        li.classlist.remove('active');
        if (li.classlist.contains(current)) {
            li.classlist.add('active');
        }
    })
})