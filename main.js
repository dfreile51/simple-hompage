import './src/css/style.css'

document.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('header button')
    const buttonClose = document.querySelector('.sidebar button')
    const sidebar = document.querySelector('.sidebar')
    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
    const htmlTag = document.querySelector('html')
    const LogoImage = document.querySelector('header>img')

    const arrayInputs = [...inputsCheck]

    buttonMenu.addEventListener('click', () => {
        sidebar.classList.add('open')
    })

    buttonClose.addEventListener('click', () => {
        sidebar.classList.remove('open')
    })

    arrayInputs.forEach(input => {
        if (localStorage.getItem('theme') === 'dark') {
            input.checked = false
            htmlTag.classList.add('dark')
            LogoImage.src = '/src/img/alarado-icon-homepage-dark.svg'
            buttonMenu.firstElementChild.src = '/src/img/menu-dark.svg'
            buttonClose.firstElementChild.src = '/src/img/close-dark.svg'
        } else {
            input.checked = true
            htmlTag.classList.remove('dark')
            LogoImage.src = '/src/img/alarado-icon-homepage.svg'
            buttonMenu.firstElementChild.src = '/src/img/menu.svg'
            buttonClose.firstElementChild.src = '/src/img/close.svg'
        }

        input.addEventListener('click', e => {
            if (e.target.checked) {
                localStorage.setItem('theme', 'light')
                htmlTag.classList.remove('dark')
                LogoImage.src = '/src/img/alarado-icon-homepage.svg'
                buttonMenu.firstElementChild.src = '/src/img/menu.svg'
                buttonClose.firstElementChild.src = '/src/img/close.svg'
            } else {
                localStorage.setItem('theme', 'dark')
                htmlTag.classList.add('dark')
                LogoImage.src = '/src/img/alarado-icon-homepage-dark.svg'
                buttonMenu.firstElementChild.src = '/src/img/menu-dark.svg'
                buttonClose.firstElementChild.src = '/src/img/close-dark.svg'
            }
        })
    })
})
