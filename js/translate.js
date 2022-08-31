// Translator
let lang = document.documentElement.lang

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


// Languages
const en = {
    links: {
        linkedinLink: `https://linkedin.com/in/confia-design/`,
        whatsLink: `https://wa.me/5511960687340?text=Hi!%20I'm%20interested%20in%20the%20services%2C%20can%20you%20give%20me%20a%20quote%3F`,
        instagramLink: `https://instagram.com/confiadesign`
    },
    texts: {
        txt0: 'home',
        txt1: 'services',
        txt2: 'portfolio',
        txt3: 'contact',
        txt4: 'Web Development',
        txt5: 'we work with prototyping and creating websites and web pages',
        txt6: 'Another Text',
        txt7: 'it seems to be the same but it is not. we also work with web application development',
        txt8: 'Design',
        txt9: `it is a vast and double path: sometimes we are photographers, but we prefer to give life to your art a thousand times with our knowledge in retouching images`,
        txt10: 'our retrospect',
        txt11: 'complete jobs',
        txt12: 'years of experience',
        txt13: 'costumers',
        txt14: 'satisfied costumers',
        txt15: 'portfolio',
        txt16: '"The best proof of love is trust."',
        txt17: 'by',
        txt18: 'Joyce Brothers',
        txt19: 'quickly access',
        txt20: 'hire us',
        txt21: 'home'
    }
}, pt = {
    links: {
        linkedinLink: `https://linkedin.com/in/confia-design/`,
        whatsLink: `https://wa.me/?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%2C%20pode%20me%20passar%20um%20or%C3%A7amento%3F`,
        instagramLink: `https://instagram.com/confiadesign`
    },
    texts: {
        txt0: 'inicio',
        txt1: 'serviços',
        txt2: 'portfolio',
        txt3: 'contato',
        txt4: 'Desenvolvimento Web',
        txt5: 'we work with prototyping and creating websites and web pages',
        txt6: 'Design #1',
        txt7: 'it seems to be the same but it is not. we also work with web application development',
        txt8: 'Design #2',
        txt9: `it is a vast and double path: sometimes we are photographers, but we prefer to give life to your art a thousand times with our knowledge in retouching images`,
        txt10: 'our retrospect',
        txt11: 'complete jobs',
        txt12: 'anos de experiência',
        txt13: 'costumers',
        txt14: 'satisfied costumers',
        txt15: 'portfolio',
        txt16: '"A melhor prova de amor é a confiança."',
        txt17: 'por',
        txt18: 'Joyce Brothers',
        txt19: 'acesso rápido',
        txt20: 'contrate-nos',
        txt21: 'inicio'
    }
}

const translate = () => {
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
