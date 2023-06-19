const nameElement = document.querySelector('.description-name');
const descriptionElementH2 = document.querySelector('.description-h2');
const descriptionElementP = document.querySelector('.description-p');
const spanLineLeftElement = document.querySelector('.line-left');
const spanLineRightElement = document.querySelector('.line-rigth');
const navBarElement = document.querySelector('.nav-bar');
const hamburgerElement = document.querySelector('.hamburger-menu');
const buttonEmailMeBigScreen = document.querySelector('.email-me-button-big-screen');
const buttonEmailMeMiniScreen = document.querySelector('.email-me-button-mini-screen');

setTimeout(() => {
  nameElement.removeAttribute("hidden")
  setTimeout(() => {
    descriptionElementH2.removeAttribute("hidden");
    setTimeout(() => {
      descriptionElementP.removeAttribute("hidden");
    }, 1000)
  }, 1000)
}, 2*1000)


var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log("Screen Width: " + screenWidth + " pixels");


function removeElement() {
  if(window.innerWidth <= 900) {
    spanLineLeftElement.style.display = 'none'
    spanLineRightElement.style.display = 'none';
    navBarElement.style.display = 'none';
    hamburgerElement.style.display = 'block';
    // buttonEmailMeBigScreen.style.display = 'none';
    // buttonEmailMeMiniScreen.style.display = 'block';
  } else {
    spanLineLeftElement.style.display = 'flex';
    spanLineRightElement.style.display = 'flex';
    navBarElement.style.display = 'flex';
    hamburgerElement.style.display = 'none';
    // buttonEmailMeBigScreen.style.display = 'block';
    // buttonEmailMeMiniScreen.style.display = 'none';
  }
}

window.addEventListener('load', removeElement);
window.addEventListener('resize', removeElement);
