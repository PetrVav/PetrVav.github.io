function hi() {
    document.writeln("<h1>Hi there 👋</h1>");
    }


    function promptName() {
        var sName = prompt("Введите свое имя.\nЭто приглашение должно отображаться, \nкогда кнопка Click Me нажата.","Ваше имя");
    
        alert("Привет, " + sName +"! \nЯ создал страницу,\nкоторая спрашивает имя у пользователя \nи выводит его с помощью функции?");
    
        rewriteParagraph(sName);
        writeNewMessage();
    }
    
    function rewriteParagraph(userName) {
        var message = document.getElementById("message");
    
        message.innerHTML = "" + userName + ", <br> если вы видите это, значит, я успешно выполнил домашнее задание.";
    }
    
    function writeNewMessage() {    
        document.getElementById("newmessage").innerHTML = "Homework seminar3";
    }
    
    function init() {
        var clickMe = document.getElementById("clickme");
        clickMe.onclick = promptName;
    }
    
    window.onload = init; 

    // form

document.getElementById("main-form").addEventListener("submit", checkForm);

//   function checkForm(event) { 

//     event.preventDefault(); //За счет этого метода(preventDefault)
//                             //мы отключаем стандартное поведение события
//                             //А стандартное поведение - это перезагрузка
//                             //страницы
//     var element = document.getElementById("main-form") 

//     var name = element.name.value;
//     var pass = element.pass.value;
//     var repass = element.repass.value;
//     var state = element.state.value;
//     var fail = "";                

// if(name == "" || pass == "" || state == "" )
//     fail = "Заполните все поля";
// else if(name.length <= 1 || name.length > 50)
//     fail = "Введите корректное имя";
// else if(pass != repass)
//     fail = "Пароли должны совпадать";
// else if(pass.split("&").length > 1)
//     fail = "Некорректный пароль";

//   if(fail != "") {             
//     document.getElementById('error').innerHTML = fail; 
//  } else { 
//     alert("Все данные корректно заполнены");

//    window.location = 'https://petrvav.github.io';
//  }
 
// }

function checkForm(event) { 
    event.preventDefault();
    var element = document.getElementById("main-form") 
    var name = element.name.value;
    var pass = element.pass.value;
    var repass = element.repass.value;
    var state = element.state.value;
    var fail = "";                

    if(name == "" || pass == "" || state == "" )
        fail = "Заполните все поля";
    else if(name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароли должны совпадать";
    else if(pass.split("&").length > 1)
        fail = "Некорректный пароль";

    if(fail != "") {             
        document.getElementById('error').innerHTML = fail; 
    } else { 
        alert("Все данные корректно заполнены");

        // Сохранить данные формы в локальном хранилище
        localStorage.setItem('name', name);
        localStorage.setItem('pass', pass);
        localStorage.setItem('state', state);

        window.location = 'https://petrvav.github.io';
    }
}
