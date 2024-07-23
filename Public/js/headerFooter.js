
var bars = document.getElementById('bars')
var smallNav= document.getElementById('small-nav')
var MobilNavOff = document.getElementById('MobilNavOff')

var x = true
bars.addEventListener('click',()=>{
    
    if(x){
        smallNav.style.transform = ' translateY(10%)'
        x = false
    }
    else{  
        smallNav.style.transform  = ' translateY(-100%)'
        x = true
    }


})
window.addEventListener('resize',()=>{
    if(window.innerWidth > 1200){
        smallNav.style.transform  = ' translateY(-100%)'
        x = true
    }
})

window.addEventListener('click',()=>{
    if(!smallNav.contains(event.target) && !bars.contains(event.target)){
        smallNav.style.transform  = ' translateY(-100%)'
        x = true
    }
})

MobilNavOff.addEventListener('click',()=>{
    smallNav.style.transform  = ' translateY(-100%)'
    x = true
})


let translate = document.getElementById('translate')

translate.addEventListener('change', () => {
    console.log(translate.value)
    var url = "/translate"; // POST isteği gönderilecek URL
    var data = {
        translate:translate.value
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })

        window.location.reload()

})