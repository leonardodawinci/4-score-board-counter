document.getElementById('homescore')

document.getElementById('guestscore')

let homecount = 0

let guestcount = 0

function add1() {
    homecount += 1
    homescore.textContent = homecount
}

function add2() {
    homecount += 2
    homescore.textContent = homecount
}

function add3() {
    homecount += 3
    homescore.textContent = homecount
}


function add1g() {
    guestcount += 1
    guestscore.textContent = guestcount
}

function add2g() {
    guestcount += 2
    guestscore.textContent = guestcount
}

function add3g() {
    guestcount += 3
    guestscore.textContent = guestcount
}

function reset() {
    guestcount = 0
    guestscore.textContent = guestcount
    homecount = 0
    homescore.textContent = homecount
}