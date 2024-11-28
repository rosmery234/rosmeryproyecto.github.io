document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        this.textContent = 'Leer menos';
    } else {
        moreInfo.classList.add('hidden');
        this.textContent = 'Leer más';
    }
});