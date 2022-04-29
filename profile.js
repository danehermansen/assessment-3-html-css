document.getElementById('color')
document.getElementById('place')
document.getElementById('ritual')


function color(event) {
    event.preventDefault()
    
    alert('My favorite color is green.')
}

function place(event) {
    event.preventDefault()

    alert('My favorite place is my own room.')
}

function ritual(event) {
    event.preventDefault()

    alert('My morning ritual is, wake up and check the time.')
}

document.getElementById('color').addEventListener('click', color)
document.getElementById('place').addEventListener('click', place)
document.getElementById('ritual').addEventListener('click', ritual)
