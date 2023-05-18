// Hamburger icon thingy for mobile devices
let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.nav-menu')

toggle.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
        // add hamburger icon
        toggle.innerHTML = `<i class="fas fa-bars"></i>`
    }
    else {
        menu.classList.add("active")
        // add X icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`
    }
});