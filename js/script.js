// Set copyright date
let yearComponent = document.querySelectorAll('.year'),
    currentYear = new Date().getFullYear()

yearComponent.forEach(e => {
    e.innerHTML = currentYear
})

