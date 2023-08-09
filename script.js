document.getElementById('changeColorButton').addEventListener('click', function() {
    changeBackgroundColor();
});

function changeBackgroundColor() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.body.classList.add('animate-color');
    setTimeout(function() {
        document.body.classList.remove('animate-color');
    }, 2000); // Через 2 секунды удаляем класс с анимацией
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
