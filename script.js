function generatePass() {
    const name = document.getElementById('nameInput').value.trim();
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    document.getElementById('passName').textContent = name;
    document.getElementById('passCard').classList.remove('hidden');
}