let questionNumber = 1;
let totalQuestions = 5;
let correctAnswers = 0;
let correct;
let appear = false;

function setup(){
    createCanvas(400,400);
}

function draw(){
    if(appear == false){
        background(250,212,135);
    }
    switch (questionNumber){
        case 1:
    background(250, 212, 135);
    text("Question One will go here, what's this?",10,80)
    text("Here's answer one, maybe it's incorrect.", 90, 150);
    text("Here's answer two, maybe it's incorrect.", 90, 250);
    text("Answer three, maybe correct.", 90,350);
    break
    case 2:
        background(250, 212, 135);
        text("Question Two will go here, what's this?",10,80)
        text("Here's answer one, maybe it's incorrect.", 90, 150);
        text("Here's answer two, maybe it's correct.", 90, 250);
        text("Answer three, maybe not correct.", 90,350);
        break
        case 3:
            background(250, 212, 135);
            text("Question Three will go here, what's this?",10,80)
            text("Here's answer one, maybe it's correct.", 90, 150);
            text("Here's answer two, maybe it's uncorrect.", 90, 250);
            text("Answer three, maybe not correct.", 90,350);
            break
        case 4:
                background(250, 212, 135);
                text("Question Four will go here, what's this?",10,80)
                text("Here's answer one, maybe it's incorrect.", 90, 150);
                text("Here's answer two, maybe it's no correct.", 90, 250);
                text("Answer three, maybe not not correct.", 90,350);
                break
                case 5:
                    background(250, 212, 135);
                    text("Question Five will go here, what's this?",10,80)
                    text("Here's answer one, maybe it's unincorrect.", 90, 150);
                    text("Here's answer two, maybe it's not correct.", 90, 250);
                    text("Answer three, maybe not correct.", 90,350);
                    break
                case 6:
                    background(250, 212, 135);
                    rect(50,100,300,200);
                    text("Congrats! You got "+ correctAnswers +" out of "+ totalQuestions+" correct!",100,200)
                    rect(160,250,75,20);
                    text("Back to Start",163,265)
    }
    if(questionNumber<=totalQuestions){
    rect(0,0,400,40);
    text("Question: "+questionNumber+"/"+totalQuestions,10,30);
    text("Average: "+correctAnswers/totalQuestions*100+"%",300,30);
    ellipse(50,150,50,50);
    text("A",50,150);
    ellipse(50,250,50,50);
    text("B",50,250);
    ellipse(50,350,50,50);
    text("C",50,350);
}
    if(appear == true){
        rect(50,100,300,200);
        if(correct == 'yes'){
            text("Correct!",175,200);
        }
        else if(correct == 'no'){
            text("Incorrect!",175,200);
        }            
        // text("Congrats! You got "+ correctAnswers +" out of "+ totalQuestions+" correct!",100,200)
        rect(160,250,80,20);
        if(questionNumber < 5){
        text("Next Question",163,265);
        }
        else{
            text("Results",180,265);
        }
    }
}

function mouseClicked(){
    if(questionNumber<6){
    if(mouseX>25&&mouseX<75&&mouseY>125&&mouseY<175&&questionNumber<6){
        if(questionNumber == 3){
            correct = 'yes';
            correctAnswers++;
        }
        else{
            correct = 'no';
        }
        appear = true;
        // questionNumber++;
    }
    else if(mouseX>25&&mouseX<75&&mouseY>225&&mouseY<275&&questionNumber<6){
        if(questionNumber == 2 || questionNumber == 4){
            correct = 'yes';
            correctAnswers++;
        }
        else{
            correct = 'no';
        }
        appear = true;
        // questionNumber++;
    }
    else if(mouseX>25&&mouseX<75&&mouseY>325&&mouseY<375&&questionNumber<6){
        if(questionNumber == 1 || questionNumber == 5){
            correct = 'yes';
            correctAnswers++;
        }
        else{
            correct = 'no';
        }
        appear = true;
        // questionNumber++;
    }
}
    if(questionNumber==6&&mouseX>160&&mouseX<160+75&&mouseY>250&&mouseY<270){
        questionNumber = 1;
        correctAnswers = 0;
    }
        if(appear == true){
        if (mouseX>160&&mouseX<160+75&&mouseY>250&&mouseY<270){
            appear = false;
            correct = '';
            questionNumber++;
        }
    }
}