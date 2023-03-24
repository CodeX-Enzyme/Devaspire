const navimg = document.querySelector("#navimg") ;
navimg.addEventListener("click",()=>{
    window.location.replace("https://devaspire.live") ;
})

/*
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
*/

const webCont = `
            <img class="sideImg" src="assets/web.png" alt="Format">
            <div class="tempText">
                <h1 class="tempHead">Web Development</h1>
                <p class="tempPara">Lorem JDLFJLJFE iunt  fjlsjfe   sdfjeljfe  lsjdflsjdfoiej  ISDJFOIEJLF DJFLJELIFJEarchitecto nisi unde dolorem asperiores tempore, recusandae odio, cupiditate cum doloribus ab dignissimos officiis laborum cumque ipsum nobis! Animi excepturi at necessitatibus atque repudiandae ipsa nemo eligendi velit deserunt.</p>
                <div id="tempBox">
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick"> Custom Website</p>
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick">Maintainence and Fix</p>
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick">Entire codebase under you control</p>
                </div>
            </div>
`

const appCont = `
            <img class="sideImg" src="assets/android.png" alt="Format">
            <div class="tempText">
                <h1 class="tempHead">App Development</h1>
                <p class="tempPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum dicta nesciunt minima a eos, atque fuga architecto nisi unde dolorem asperiores tempore, recusandae odio, cupiditate cum doloribus ab dignissimos officiis laborum cumque ipsum nobis! Animi excepturi at necessitatibus atque repudiandae ipsa nemo eligendi velit deserunt.</p>
                <div id="tempBox">
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick"> Custom Android App</p>
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick">Maintainence and Fix</p>
                    <p class="tempOffer"><img src="https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png" alt="tick">Entire codebase under you control</p>
                </div>
            </div>
`

const webBtn = document.querySelectorAll(".selectBtn")[0] ;
const appBtn = document.querySelectorAll(".selectBtn")[1] ;
const tempCont = document.getElementById("temp") ;

appBtn.addEventListener("click",()=>{
    webBtn.classList.remove("clickedBtn") ;
    appBtn.classList.add("clickedBtn") ;
    tempCont.innerHTML = appCont ;
})

webBtn.addEventListener("click",()=>{
    appBtn.classList.remove("clickedBtn") ;
    webBtn.classList.add("clickedBtn") ;
    tempCont.innerHTML = webCont ;
})


const homeContent = document.getElementsByClassName('content-container')[0] ;
window.addEventListener('DOMContentLoaded',()=>{
    const homeContent2 = document.getElementsByClassName('home-img')[0] ;
    homeContent2.style.height = '' + homeContent.clientHeight + 'px' ;
    console.log(homeContent.clientHeight) ;
    console.log(homeContent2.clientHeight) ;
})