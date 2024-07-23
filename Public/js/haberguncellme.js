
let paragraf = document.getElementById('paragraf')
let liste = document.getElementById('liste')
let fotograf = document.getElementById('fotograf')
let inputText = document.getElementById('inputText')





let kaydet = document.getElementById('kaydet')
let html = document.getElementById('html')



let fotoekle = document.getElementById('fotoekle')

let pBaslik = document.getElementById('pBaslik')


let kapakfoto = document.getElementById('kapakfoto')
let kapaktitle = document.getElementById('kapaktitle')
let fotografkutusu = document.getElementById('fotografkutusu')

let resiminput = document.getElementById('resiminput')
let resimEkle = document.getElementById('resimEkle')
let fotodurum = document.getElementById('fotodurum')


let classeklemeID = document.getElementById("classekleme");
let seceneklerKutusu = document.getElementById("seceneklerKutusu");

resimEkle.addEventListener('click',()=>{
    var file = resiminput.files[0];
    var formData = new FormData();
    formData.append('resiminput', file);
    fetch('/haberekle/haberfotograf', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data =>{ 
        fotodurum.innerText = data.success
        setTimeout(() => {
            fotodurum.innerText = ''
        }, 2000);
      })
      .catch(error => console.error('Error:', error));
})


let fotoeklemekutu = document.getElementById('fotoeklemekutu')
fotoekle.addEventListener('click', () => {
    if (fotoeklemekutu.style.display == 'block') {
        fotoeklemekutu.style.display = 'none'
    }
    else {
        fotoeklemekutu.style.display = 'block'
    }

})

paragraf.addEventListener('click', () => {
    let p = document.createElement('p')
    p.onclick = function (event) {
        etiket(event)
    }
    p.textContent = 'Yeni Paragrag Bir şeyler Girin'
    html.appendChild(p)

})
liste.addEventListener('click', () => {
    let li = document.createElement('li')
    li.onclick = function (event) {
        etiket(event)
    }
    li.textContent = 'Yeni liste Bir şeyler Girin'
    html.appendChild(li)

})
pBaslik.addEventListener('click', () => {
    let h3 = document.createElement('h3')
    h3.onclick = function (event) {
        etiket(event)
    }
    h3.className = 'hbtitle'
    h3.textContent = 'Yeni Başlık Bir şeyler Girin'
    html.appendChild(h3)

})

fotograf.addEventListener('click', () => {
    let img = document.createElement('img')
    img.onclick = function (event) {
        etiketimg(event)
    }
    img.src = '/img/Main/default.png'
    html.appendChild(img)

})

let tumPler = document.querySelectorAll('p')
let tumh3ler = document.querySelectorAll('h3')
let tumIMGler = document.querySelectorAll('img')

tumIMGler.forEach(element => {
    element.onclick = function (event) {
        etiketimg(event)
    }
});


tumh3ler.forEach(element => {
    element.onclick = function (event) {
        etiket(event)
    }
});


tumPler.forEach(element => {
    element.onclick = function (event) {
        etiket(event)
    }
});

kaydet.addEventListener('click', () => {

    const currentURL = window.location.href;
    
    const urlParcalari = currentURL.split("/");

    const sonParametre = urlParcalari[urlParcalari.length - 1];
    
   

    fetch(`/haberekle/duzenle/guncelle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html: html.innerHTML, kapakfoto: kapakfoto.src, kapaktitle: kapaktitle.innerText,id:sonParametre }),
    })
        .then(response => response.json())
        .then(data => window.location.href = '/haberekle/liste')
        .catch(error => console.error('Error:', error));

})

let etiketglobal;
function etiket(event) {

    eklemekutu.style.display = 'none'
    fotoeklemekutu.style.display = 'none'
    seceneklerKutusu.style.transform = "translateY(0px)";
    classeklemeID.value = event.target.className
    inputText.value = event.target.textContent;
    etiketglobal = event;

}


function etiketimg(event) {
 

    eklemekutu.style.display = 'none'
    fotoeklemekutu.style.display = 'none'
    seceneklerKutusu.style.transform = "translateY(0px)";
    classeklemeID.value = event.target.className
    inputText.value = event.target.src;
    etiketglobal = event;
}


function inputekleme(event) {
    etiketglobal.target.textContent = event.target.value

    etiketglobal.target.src = event.target.value

}

function kapatt(event) {
    seceneklerKutusu.style.transform = "translateY(300px)";
    fotografkutusu.style.transform = "translateY(240px)";

}
function sill(event) {
    (etiketglobal.target).parentNode.removeChild(etiketglobal.target)
    fotografkutusu.style.transform = "translateY(240px)";
    
}

function fotoboxac() {
    fotografkutusu.innerHTML = ''

    if (fotografkutusu.style.transform == "translateY(240px)") {
      fotografkutusu.style.transform = "translateY(0px)";
    } else {
      fotografkutusu.style.transform = "translateY(240px)";
    }
    
        fetch('/haberekle/haberfotograf')
            .then(response => response.json())
            .then(data => {
                for (let item of data) {
                    let img = document.createElement('img')
                    img.onclick = function (event) {
                        resimgoster(event)
                    }
                    img.src = item.img
                    fotografkutusu.appendChild(img)
                }
            })
            .catch(error => console.error('Hata:', error));

    }



function resimgoster(event) {
    etiketglobal.target.src = event.target.src
    inputText.value = event.target.src

}

function classekleme(event){
    etiketglobal.target.className =  event.target.value

}



let draggableDiv = document.getElementById('draggableDiv')
let eklemekutu = document.getElementById('eklemekutu')
eklemekutu.style.display = 'none'
draggableDiv.addEventListener('click', () => {
    if (eklemekutu.style.display == 'none') {
        eklemekutu.style.display = 'block'
        eklemekutu.style.opacity = '1'

        seceneklerKutusu.style.transform = "translateY(300px)";

    }
    else {
        eklemekutu.style.display = 'none'
        fotoeklemekutu.style.display = 'none'


    }
})



function habersil(event) {
    const currentURL = window.location.href;
    
    const urlParcalari = currentURL.split("/");

    const sonParametre = urlParcalari[urlParcalari.length - 1];
    
    // console.log('En Sondaki Dosya İsmi:', sonParametre);

    fetch(`/haberekle/duzenle/sil`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id:sonParametre }),
    })
        .then(response => response.json())
        .then(data => window.location.href = '/haberekle/liste')
        .catch(error => console.error('Error:', error));

}
