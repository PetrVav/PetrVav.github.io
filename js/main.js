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