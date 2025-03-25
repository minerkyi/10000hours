// js file
const dialog = document.getElementById('dialog');
const showDialogBtn = document.getElementById('showDialogBtn');
const closeBtn = document.getElementById('closeBtn');

showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});