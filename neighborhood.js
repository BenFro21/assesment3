let randomBtn = document.querySelector('.random-Btn')

let locations = ['Bubbas', 'Firefly', 'The Kitchen', 'East Bay Park', 'Clinch Park', 'F&M park']

let random = Math.floor(Math.random() * locations.length)

randomBtn.addEventListener('click', () => {
    alert(`Thank you for playing, your random Location is: ${locations[random]}`)
})