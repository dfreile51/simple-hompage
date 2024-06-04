import './src/css/style.css'

document.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('header button')
    const buttonClose = document.querySelector('.sidebar button')
    const sidebar = document.querySelector('.sidebar')

    buttonMenu.addEventListener('click', () => {
        sidebar.classList.add('open')
    })

    buttonClose.addEventListener('click', () => {
        sidebar.classList.remove('open')
    })
})
