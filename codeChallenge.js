(function(){
function Question(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}
Question.prototype.displayQuestions=function(){
    console.log(this.question)
    for(var i=0;i<this.answers.length;i++){
        console.log(i+':'+this.answers[i]);
    }
}
Question.prototype.checkAnswer=function(ans,callback){
    var sc;
    if(ans === this.correct){
        console.log('Correct answer');
        sc=callback(true);
    }
    else
    {
        console.log('Wrong answer! Try Again');
        sc=callback(false);

    }
    this.displayScore(sc);
}

Question.prototype.displayScore=function(score){
        console.log('your current score is' + score);    
}
var q1=new Question('Is JavaScript coolest programming language',['yes','no'],0);

var q2=new Question('who is the Best teacher',['john','mike','smith'],1);

var q3=new Question('What does best describe coding',['boring','hard','fun','tedious'],3);

var questions=[q1,q2,q3];
function score(){
    var sc=0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}
var keepScore=score();

function nextQuestion(){
var n=Math.floor(Math.random()*questions.length);

    questions[n].displayQuestions();

var answer=prompt('select correct answer');
if(answer !== 'exit'){
    questions[n].checkAnswer(parseInt(answer),keepScore);

    nextQuestion();
}
   
}
nextQuestion();   
})();
