// js file
const dialog = document.getElementById('dialog-training');
const showDialogBtn = document.getElementById('btn-show-dialog');
const closeBtn = document.getElementById('btn-close');

showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});