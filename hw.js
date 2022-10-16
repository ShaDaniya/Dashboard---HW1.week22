let user = undefined;

try {
    alert(`Привет, ${user.name}`);
}
catch(error) {
    alert('Имя пользователя не заполнено. Подробности ' + error.message)
}