// Translator
import en from './en.js'
import pt from './pt.js'
let toggleLang = document.querySelectorAll('.lang')

// // Links
let whatsLink = document.getElementById('whatsLink'),
    linkedinLink = document.getElementById('linkedinLink'),
    instagramLink = document.getElementById('instagramLink')

// // Texts
let txt0 = document.getElementById('txt0'),
    txt1 = document.getElementById('txt1'),
    txt2 = document.getElementById('txt2'),
    txt3 = document.getElementById('txt3'),
    txt4 = document.getElementById('txt4'),
    txt5 = document.getElementById('txt5'),
    txt6 = document.getElementById('txt6'),
    txt7 = document.getElementById('txt7'),
    txt8 = document.getElementById('txt8'),
    txt9 = document.getElementById('txt9'),
    txt10 = document.getElementById('txt10'),
    txt11 = document.getElementById('txt11'),
    txt12 = document.getElementById('txt12'),
    txt13 = document.getElementById('txt13'),
    txt14 = document.getElementById('txt14'),
    txt15 = document.getElementById('txt15'),
    txt16 = document.getElementById('txt16'),
    txt17 = document.getElementById('txt17'),
    txt18 = document.getElementById('txt18'),
    txt19 = document.getElementById('txt19'),
    txt20 = document.getElementById('txt20'),
    txt21 = document.getElementById('txt21')

// // Arrays
let links = [linkedinLink, whatsLink, instagramLink],
    texts = [txt0, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11, txt12, txt13, txt14, txt15, txt16, txt16, txt17, txt18, txt19, txt20, txt21]


toggleLang.forEach(e => {
    e.addEventListener('click', ()=>{
        if(e.attributes.name.value == 'pt'){
            document.documentElement.lang = 'pt'
            translate()
        }
        if(e.attributes.name.value == 'en'){
            document.documentElement.lang = 'en'
            translate()
        }
    })
})

const translate = () => {
    let lang = document.documentElement.lang
    toggleLang.forEach(e =>{
        if(e.attributes.name.value == lang) {
            e.id = 'langActive'
        } else {
            e.id = 'langNonActive'
        }
    })
    
    if (lang === 'en') {
        try {
            for (let i = 0; i <= links.length; i++) {
                if (en.links.hasOwnProperty(links[i].id)) {
                    links[i].setAttribute('href', en.links[links[i].id])
                }
            }
        } catch (e) {
            (e) => { console.log(e) }
        }
        try {
            for (let x = 0; x <= texts.length; x++) {
                if (en.texts.hasOwnProperty(texts[x].id)) {
                    texts[x].innerText = en.texts[texts[x].id]
                }
            }
        } catch (e) {
            (e) => { console.log(e) }
        }
    }
    if (lang === 'pt') {
        try {
            for (let i = 0; i <= links.length; i++) {
                if (pt.links.hasOwnProperty(links[i].id)) {
                    links[i].setAttribute('href', pt.links[links[i].id])
                }
            }
        } catch (e) {
            (e) => { console.log(e) }
        }
        try {
            for (let x = 0; x <= texts.length; x++) {
                if (pt.texts.hasOwnProperty(texts[x].id)) {
                    texts[x].innerText = pt.texts[texts[x].id]
                }
            }
        } catch (e) {
            (e) => { console.log(e) }
        }
    }
}

translate()
