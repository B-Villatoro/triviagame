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

StartGame = function(){
    $("#start").click(function(){
        clearBox();
        sendInfo();
       
    })
}

clearBox = function(){
    $("#startbox").empty();
}
sendInfo = function(){
    $("#startbox").append("<div id='q'>"+QUESTIONS[i].q+"<div id='a'>"+QUESTIONS[i].a+"<div id='b'>"+QUESTIONS[i].b+"<div id='c'>"+QUESTIONS[i].c+"<div id='d'>"+QUESTIONS[i].d);
}

selectAnswer = function(){
    $("#a").click(function(e){
        answerChoice = e.target.id;
       
    })
}

compareAnswer = function(){
    if (QUESTIONS.answerChoice == QUESTIONS.key){
        correct++;
        $("#startbox").html("Nice Job!<br>"+QUESTIONS[i].comment)
        console.log("you got it right!");
    }
    else{
        wrong++;
        $("#startbox").html("Nope <br>"+QUESTIONS[i].comment)

    }
}

StartGame();
selectAnswer();
compareAnswer();
