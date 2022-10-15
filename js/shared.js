var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');

// console.dir(backdrop);
// console.dir(selectPlanButton);

for (var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);

modalNoButton.addEventListener('click', closeModal);

function closeModal () {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}