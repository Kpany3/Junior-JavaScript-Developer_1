function doSum() {

    var number1 = document.getElementById('number1').value;//получаем значение из первого input
    if (isNaN(number1) === true || number1 === '') {//если не число
        alert('Введите число в поле 1');
        document.getElementById('number1').focus();//автофокус на поле 1
        return;
    }

    number1 = parseFloat(number1);// преобразование в десятичное число

    var number2 = document.getElementById('number2').value;//получаем значение из второго input
    if (isNaN(number2) === true || number2 === '') {//если не число
        alert('Введите число в поле 2');
        document.getElementById('number2').focus();//автофокус на поле 2
        return;
    }
    number2 = parseFloat(number2);// преобразование в десятичное число


    var result = number1 + number2;// сложение

    document.getElementById('result').innerHTML = result.toFixed(1);//подстановка в поле вывод числа с точностью до 0.1 (округление в ближайшуюу сторону)
    alert(result.toFixed(1));//модальное окно
}