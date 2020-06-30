//Pop up
// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// closeModalButtons.forEach(button => { 
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return 
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return 
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }



//slide down and display item data
// function fetchData() {
//     fetch("https://api.spoonacular.com/recipes/guessNutrition?apiKey=f97e16fe3d4f48b1bd29e46d6b0154b7&title="+queryStr)
//         .then(response => {
//            return response.json();
//         }).then((json) => {
//             console.log(json)
//             document.querySelector(".modal-body").classList.add("open")
//             document.querySelector("#protein").innerHTML = "hello world"
//         });
// }

// fetchData();