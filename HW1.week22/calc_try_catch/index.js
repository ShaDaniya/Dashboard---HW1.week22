function calcSum() {
    const num1 = Number(document.getElementById('addendOne').value);
    const num2 = Number(document.getElementById('addendTwo').value);
    const resultSum = num1 + num2;
    document.getElementById('resultSum').innerHTML = resultSum;
    //проверка непустого первого слагаемого - 22НЕДЕЛЯ
    try {
        if(num1 == '') {
            throw new Error('Котик, ты пропустил первое слагаемое');
        }
    }
    catch(error) {
        document.getElementById('resultSum').innerHTML = 'Ошибка. ' + error.message;
    }

        //проверка непустого второго слагаемого - 22НЕДЕЛЯ
        try {
            if(num2 == '') {
                throw new Error('Котик, ты пропустил второе слагаемое');
            }
        }
        catch(error) {
            document.getElementById('resultSum').innerHTML = 'Ошибка. ' + error.message;
        }
    }
    
    function calcSubtraction() 
    {
        const numOne = Number(document.getElementById('numOne').value);
        const numTwo = Number(document.getElementById('numTwo').value);
        const resultMinus = (+numOne - +numTwo);
        document.getElementById('resultMinus').innerHTML = resultMinus;
        
        //проверка непустого первого числа
        try {
            if (numOne == '') {
                throw new Error('Котик, из чего мы будем вычитать?');
            }
        }
        catch(error) {
            document.getElementById('resultMinus').innerHTML = 'Ошбика. ' + error.message;
        }

        //проверка непустого вычитаемого числа
        try {
            if (numTwo == '') {
                throw new Error('Котик, что мы будем вычитать?');
            }
        }
        catch(error) {
            document.getElementById('resultMinus').innerHTML = 'Ошбика. ' + error.message;
        }
    }
    
    function calcMultiplication() 
    {
        const factorOne = Number(document.getElementById('factorOne').value);
        const factorTwo = Number(document.getElementById('factorTwo').value);
        const resultMultiplication = (+factorOne * +factorTwo);
        document.getElementById('resultMultiplication').innerHTML = resultMultiplication;
        //проверка непустого первого множителя
        try {
            if (factorOne == '') {
                throw new Error('Котик, не забудь первое число');
            }
        }
        catch(error) {
            document.getElementById('resultMultiplication').innerHTML = 'Ошбика. ' + error.message;
        }

        //проверка непустого второго множителя
        try {
            if (factorTwo == '') {
                throw new Error('Котик, не забудь второу число');
            }
        }
        catch(error) {
            document.getElementById('resultMultiplication').innerHTML = 'Ошбика. ' + error.message;
        }
    }
    
    function calcDivision() 
    {
        const dividend = document.getElementById('dividend').value;
        const divider = document.getElementById('divider').value;
        const resultDivision = (+dividend / +divider);
        //проверка деления на ноль - 22 НЕДЕЛЯ
        try {
        if (divider == 0)
            throw new Error('Котик, а на ноль же делить нельзя!');
            document.getElementById('resultDivision').innerHTML = resultDivision;
    }
    catch (error) {
        document.getElementById('resultDivision').innerHTML = 'Введенное число некорректно. Подробности: ' + error.message;
    }

        //проверка пустой строки в делимом- 22 НЕДЕЛЯ
        try {
            if (dividend == '') {
            throw new Error('Котик, что будем делить?');
        }
    }
    catch(error) {
        document.getElementById('resultDivision').innerHTML = 'Ты пропустил первое число. ' + error.message;
    }

        //проверка пустой строки в делителе - 22 НЕДЕЛЯ
        try {
            if (divider == '') {
                throw new Error('Котик, напиши, на что будем делить?')
            }
        }
    catch(error) {
        document.getElementById('resultDivision').innerHTML = 'Ты пропустил делитель. ' + error.message;
    }
}

    const button = document.getElementById('division');
    
    //такой вариант с options сделала, чтобы уведомление о том, что не заполнен делитель, появлялось только один раз
    const options = {
        "once": true
    }

    //результат деления
    button.addEventListener('click', calcDivision);

    //валидация чекбоксов
    (function () {
        'use strict'
        // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
        var forms = document.querySelectorAll('.needs-validation')

        // Зацикливайтесь на них и предотвращайте отправку
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
                form.classList.add('was-validated')
            }, false)
        })
    })()