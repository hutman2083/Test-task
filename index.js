function showForm() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('purchaseForm').classList.remove('hidden');
}

function hideForm() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('purchaseForm').classList.add('hidden');
    document.getElementById('overlay1').classList.add('hidden');
    document.getElementById('purchaseForm1').classList.add('hidden');
}

function submitForm() {
    console.log('Данные отправлены!');
    hideForm();
}

function submitForm1() {
    console.log('Данные отправлены!');
    hideForm();
}

function showForm1() {
    document.getElementById('overlay1').classList.remove('hidden');
    document.getElementById('purchaseForm1').classList.remove('hidden');
}

