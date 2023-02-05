function username()
{
    pn1 = document.getElementById("player1").value;
    pn2 = document.getElementById("player2").value;

    localStorage.setItem("pn1", pn1);
    localStorage.setItem("pn2", pn2);

    window.location = "Math.html";
}

player1_name = localStorage.getItem("pn1");
player2_name = localStorage.getItem("pn2");
document.getElementById("player_no1").innerHTML= player1_name+ ":" ;
document.getElementById("player_no2").innerHTML= player2_name+ ":" ;

player_score1 = 0;
player_score2 = 0;

function send()
{
    number1 = document.getElementById("word1").value;
    number2 = document.getElementById("word2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1+ "X"+ number2 + "<h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br><br><button class='bnt bnt-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

player_question ="player1";
player_answer="player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(player_answer == "player1")
        {
            update_player1_score = player_score1 + 1;
            document.getElementById("player_score1").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player_score2 + 1;
            document.getElementById("player_score2").innerHTML = update_player2_score; 
        }

    }

    if(player_question == "player1")
    {
        player_question = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name
    }
    else
    {
        player_question = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name
    }

    if(player_answer == "player1")
    {
        player_answer = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name
    }
    else
    {
        player_answer = "player1"
        document.getElementById("player_answer").innerHTML = " Answer turn - " + player1_name
    }
}