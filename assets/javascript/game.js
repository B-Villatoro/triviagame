const QUESTIONS =[
    {
        q : "What is the name of Aragorn's father?",
        a : "Argonui",
        b : "Arathorn II",
        c : "Elrond",
        d : "Arador",
        key : "Arathorn II",
        comment : "Arathron II was the father of Aragorn",
    },
    {
        q : "What does Eru Illúvatar not create?",
        a : "Arda",
        b : "Valar",
        c : "Ainur",
        d : "Uruk-hai",
        key : "Uruk-hai",
        comment : "Orcs were created by morgoth then later bred into Uruk-hai by Saruman the Wise",
    },
    {
        q : "Where does Aragorns lineage come from?",
        a : "Númenor",
        b : "Gondor",
        c : "Rohan",
        d : "Middle-Earth",
        key : "Númenor",
        comment : "Aragorn's heritage comes from Númenor"
    },
    {
        q : "Who is legolas's best friend?",
        a : "Frodo",
        b : "Aragorn",
        c : "Arwen",
        d : "Gimli",
        key : "Gimli",
        comment : "Gimli and Legolas are best friends",     
    }
]
let i = 0;
let answerChoice;
let correct = 0;
let wrong = 0;
let gamerun = false;
let answerPicked = false;
let a;
let b;
let c; 
let d;
let timerInterval0;
let timerInterval1;

StartGame = function(){
    $("#start").click(function(){
        gamerun = true
        clearBox();
        sendInfo();
    })
}

clearBox = function(){
    $("#startbox").empty();
}
sendInfo = function(){
    if(i < QUESTIONS.length){
    
    $("#startbox").prepend("<div id='q'>"+QUESTIONS[i].q+"</div><div id='a' class='pickthis'>"+QUESTIONS[i].a+"</div><div id='b' class='pickthis'>"+QUESTIONS[i].b+"</div><div id='c' class='pickthis'>"+QUESTIONS[i].c+"</div><div id='d'class='pickthis'>"+QUESTIONS[i].d+"</div>");
    selectAnswer();
    questionTimer.start();
    $('#startbox').append('<div id="timerbox" Timer : '+questionTimer.timer+'</div>');    
    
    }
    else{
        $("#startbox").html('<div id="finalscore">You got '+correct+" right!<br>You got "+wrong+' wrong</div>');
       
    }
}

selectAnswer = function(){
    $(".pickthis").click(function(e){
        answerChoice = e.target.id;
        console.log(answerChoice);
       convertAnswer(answerChoice);
    })
}

convertAnswer = function(vari){
    if(vari === "a"){
        a = String(vari);
        compareAnswer(a);
    }
    else if(vari === "b"){
        b = String(vari);
        compareAnswer(b);
    }
    else if(vari === "c"){
        c = String(vari);
        compareAnswer(c);
    }
    else if(vari === "d"){
        d = String(vari);
        compareAnswer(d);
    }
}

compareAnswer = function(answer){
    
    if (eval("QUESTIONS[i]."+answer) == QUESTIONS[i].key){
        
        correct++;
        console.log(correct);
        $("#startbox").html("Nice Job!<br>"+QUESTIONS[i].comment)
       
        nextQuestion();
    }
    else{
        wrong++;
        $("#startbox").html("Nope <br>"+QUESTIONS[i].comment)
        nextQuestion();
    }
}


nextQuestion = function(){
    $("#startbox").append('<div id="nextbtn" class=" col-2 text-center shadow" > Next </div>');
    questionTimer.stop();
    questionTimer.reset();
    $("#nextbtn").click(function(){
        i++
        clearBox();
        sendInfo();
    })
}


questionTimer = {

    timer: 6,
    isRunning : false,

    start : function(){
        if(!questionTimer.isRunning){
            timerInterval0 = setInterval(questionTimer.ticking,1000);
            timerInterval1 = setInterval(questionTimer.checker,1000);
            questionTimer.isRunning = true;
        }
    },

    stop : function(){
        if(questionTimer.isRunning){
            clearInterval(timerInterval1);
            clearInterval(timerInterval0);
            questionTimer.isRunning = false;
        }
    },

    ticking : function(){
        questionTimer.timer--;
        console.log(questionTimer.timer);
        $('#timerbox').html("Timer : "+questionTimer.timer)
    },

    outOfTime : function(){
            i++
            wrong++
            clearBox()
            sendInfo();  
    },

    reset : function(){
        questionTimer.timer = 6;

    },
    checker : function(){
        if(questionTimer.isRunning && questionTimer.timer === 0){
            questionTimer.stop();
            questionTimer.outOfTime();
            questionTimer.reset();
           
        } 
    },
}


StartGame();



