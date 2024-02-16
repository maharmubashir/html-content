let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentwordindex = 0;
let maxwordindex = words.length -1;
words[currentwordindex].style.opacity = "1";

let changeText = ()=>{
    let currentword = words[currentwordindex];
    let nextword = currentwordindex === maxwordindex ? words[0] : words[currentwordindex + 1];

    Array.from(currentword.children).forEach((letter,i)=>{
     setTimeout(()=>{
     letter.className = "letter out";
     },i * 80);
    });
    nextword.style.opacity = "1";
    Array.from(nextword.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
    letter.className = "letter in";
    },340 + i * 80);
    });
    currentwordindex = currentwordindex === maxwordindex ? 0 : currentwordindex + 1;
};

changeText();
setInterval(changeText,3000)

// circle skill/////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor((dots * marked) / 100);
        var points = "";
        var rotate = 360 / dots;

        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }

        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');

        pointsMarked.forEach((point,i) => {
            if (i < percent) {
                point.classList.add('marked');
            }
        });
    });
});



// //////////////////////////////////mix it up portfolio section/////////////////
var mixer = mixitup('.portfolio-gallery');

// //////////////////////////////////active menu/////////////////
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function getSectionIndex() {
    for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY + 97 >= sections[i].offsetTop) {
            return i;
        }
    }
    return 0; // Default to the first section if no match is found
}

function setActiveMenu() {
    let index = getSectionIndex();
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[index].classList.add("active");
}

setActiveMenu();
window.addEventListener("scroll", setActiveMenu);

// sticky navbar/////////////////////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})





