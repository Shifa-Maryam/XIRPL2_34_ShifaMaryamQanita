document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('hitung');
    const incrementButton = document.getElementById('tambah');
    const decrementButton = document.getElementById('kurang');
    const resetButton = document.getElementById('reset');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        count--;
        counter.textContent = count;
    });

    resetButton.addEventListener('click', () => {
        count = 0;
        counter.textContent = count;
    });
});