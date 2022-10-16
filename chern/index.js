// let user = undefined;

// try {
//     console.log(user.name);
// }
// catch(error)
// {
//     console.log("Ваш формат данных непонятен. Подробности: " + error.name);
// }

// console.log('text');

//2 - если неправильный JSON
// let user = undefined;

// try {
//     let json = '[ewrks-1]';
//     console.log(JSON.parse(json));
// }
// catch(error)
// {
//     console.log("Ваш формат данных непонятен. Подробности: " + error.message);
// }

// console.log('text');

//3 - пример - деление на 0
let user = undefined;
let a = 10;
let b = 0;
let result = 0;

try {
    if (b == 0)
        throw new Error("Нельзя делить на ноль");
    result = a / b;

    console.log(result);
}
catch(error)
{
    console.log("Ваш формат данных непонятен. Подробности: " + error.message);
}
finally
{
    console.log(result);
}

console.log('text');