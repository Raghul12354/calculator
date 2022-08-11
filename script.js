let answerz = document.getElementById("answer");

function display(num){
    answerz.value += num;
}

function Caculate(){
    try {
        answerz.value = eval(answer.value);
    } 
    catch (err) {
        alert("Invalid")
    }
}

function Clear(){
    answerz.value ="";
}

function del(){
    answerz.value = answer.value.slice(0,-1);
}