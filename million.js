let user,  win = 0, money = 0;

for (i = 0; i < play.length; i++) {
    
    user = +prompt("Вопрос №" + [i + 1] + "  *введите № ответа" + "\n" + play[i].q + "\n Варианты ответов:" + "\n" + play[i].a1 + "\n" + play[i].a2 + "\n" + play[i].a3 + "\n" + play[i].a4);
    
    if (user == play[i].correct) {
        money+= 1000;
        alert("Поздравляем! Это правильный ответ!");
        win++;
    }
    
    else {
        alert ("Ответ неверный!" + "\nПравильный ответ:" + play[i].correct)        
        
    }
}

  alert ("Количество правильных ответов:  "+ win+ "\nВы выиграли " + money + " рублей");