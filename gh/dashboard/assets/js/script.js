const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      logo = body.querySelector('#logo')


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    logo.classList.toggle("rotate");
    logo.classList.toggle("suave");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

let clickCounter = 0
logo.addEventListener('click', ()=>{
    clickCounter ++
    console.log(clickCounter)
    switch (clickCounter) {
        case 10:
            logo.classList.add('infinite-spin', 'normal')
            break;
        case 25:
                logo.classList.add('infinite-spin', 'fast')
                break;
        case 50:
                logo.classList.add('infinite-spin', 'faster')
                break;
        case 50:
                logo.classList.add('infinite-spin', 'faster')
                break;
        case 100:
                logo.classList.add('infinite-spin', 'fucking-faster')
                break;
        case 125:
                logo.classList.remove('infinite-spin', 'normal', 'fast', 'faster', 'fucking-faster')
                window.alert('Parabéns, bastardo. Você quebrou o cooler.')
                break;
        default:
            break;
    }
    
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light Theme";
    }else{
        modeText.innerText = "Dark Theme";
        
    }
});

// easter egg 


console.log(modeSwitch.value)