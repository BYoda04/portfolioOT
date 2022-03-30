
let toggle = document.querySelector('.toggle')
let topbar = document.querySelector('.topbar')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.onclick = () =>{
    toggle.classList.toggle('activate')
    topbar.classList.toggle('activate')
    navigation.classList.toggle('activate')
    main.classList.toggle('activate')
}

// now. we fix menuacrivate class issue for mobiles devices
function toggleMenu() {
    let navigation = document.querySelector('.navigation')
    let main = document.querySelector('.main')
    navigation.classList.remove('activate')
    main.classList.remove('activate')
}

document.querySelector('.toggle').addEventListener('click',()=>{
    document.querySelector('.navigation').classList.toggle('show')
})