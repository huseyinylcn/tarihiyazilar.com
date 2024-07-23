let kayitClose = document.getElementById('kayitClose')
let girisClose = document.getElementById('girisClose')

let kayitBox = document.getElementById('kayitBox')
let kayitBoxOpen = document.getElementById('kayitBoxOpen')
let girisBox = document.getElementById('girisBox')



girisClose.addEventListener('click',()=>{
    girisBox.style.transform = 'translateY(-600px)'
})
kayitClose.addEventListener('click',()=>{
    kayitBox.style.transform = 'translateY(-600px)'
})



kayitBoxOpen.addEventListener('click',()=>{
    kayitBox.style.transform = 'translateY(0px)'
    girisBox.style.transform = 'translateY(-600px)'

})

let girisBoxOpenFunc = ()=>{

    kayitBox.style.transform = 'translateY(-600px)'
    girisBox.style.transform = 'translateY(0px)'
    smallNav.style.transform  = ' translateY(-100%)'
    x = true

}


let sayfa = document.getElementById('sayfa')
let sifrekutusu = document.getElementById('sifrekutusu')

var currentURL = window.location.href;
var path = new URL(currentURL).pathname;
sayfa.value = path



if(sifrekutusu.innerHTML == 1){
    girisBoxOpenFunc()
}




