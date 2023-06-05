
console.log("yes")

const mobileButton = document.querySelector('.hamburger')
mobileButton.addEventListener('click',function(){
    const mobileMenu = document.querySelector('.mobileNav')
mobileMenu.style.left='0'
console.log('click is working')
})