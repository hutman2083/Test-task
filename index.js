function showForm() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('purchaseForm').classList.remove('hidden');
}

function hideForm() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('purchaseForm').classList.add('hidden');
}

function submitForm() {
    console.log('Данные отправлены!');
    hideForm();
}