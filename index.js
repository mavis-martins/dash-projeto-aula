// function myFunction() {
//     document.getElementById("myDropdown");
// }

//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-menu");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }

const buttons = document.querySelectorAll('.dropdown-item');
const image = document.querySelector('.dev-photo');
const name = document.querySelector('.name');
const skills = document.querySelector('.occupation');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedName = event.target.textContent.trim();
        console.log(selectedName);
        const imagePath = `./assets/images/${selectedName}.png`;
        console.log(imagePath)
        image.src = imagePath;
        name.textContent = selectedName;

        if(selectedName == 'Allyson Santana'){
            skills.textContent = 'Full Stack - Angular - React - NodeJs - Python';
        } else if(selectedName == 'Jakeline Nogueira') {
            skills.textContent = 'Frontend - Angular - React - React Native';
        } else if(selectedName == 'Roberto') {
            skills.textContent = 'Full Stack - Angular - React - NodeJs - Python';
        } else if(selectedName == 'Mavis') {
            skills.textContent = 'Full Stack - Angular - React - NodeJs - Python';
        } else if(selectedName == 'Tiago Rodrigues'){
            skills.textContent = 'Full Stack - Angular - React - NodeJs - Python - PHP'
        } else if(selectedName == 'Monaliza Lorens') {
            skills.textContent = 'Full Stack - Angular - React - NodeJs';
        } else if(selectedName == 'Igor Andrade') {
            skills.textContent = 'Frontend - Angular - React - React Native';
        }
        });
});