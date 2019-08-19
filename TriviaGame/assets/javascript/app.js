$('#start').on('click',function(){
    $('start').remove();
    game.start();


})
$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
question: "What was the first full-length CGI movie?",
answers: ["A Bug's Life","Monsters Inc.","Toy Story","The Lion King"],
correctAnswer:"Toy Story"
}, {
question: "Which NBA team won the most titles in the 90s?",
answers: ["New York Knicks","Golden State Warriors","San Antonio Spurs","Chicago Bulls"],
correctAnswer:"Chicago Bulls"
}, {
question: "What was the name of the princicpal at Bayside High in Save By the Bell?",
answers: ["Mr. Belvedere","Mr. Rogers","Mr. Belding","Mr. Costanza"],
correctAnswer:"Mr. Belding"
}, {
question: "What was Doug's best friend's name?",
answers: ["Skeeter","Mark","Zach","Cody"],
correctAnswer:"Skeeter"
}, {
question: "Which of these is NOT a name of the Spice Girls?",
answers: ["Sporty Spice","Cheeky Spice","Scary Spice","Posh Spice"],
correctAnswer:"Cheeky Spice"
}, {
question: "Which popular Disney movie featured the song,  Circle of Life?",
answers: ["Frozen","Moana","The Lion King","Pocahontas"],
correctAnswer:"The Lion King"
}, {
question: "Finish this line from The Jefferson's theme song, We finally got a piece of the what?",
answers: ["Life","Sky","Pie","Bread"],
correctAnswer:"Pie"
}, {
question: "What was Jerry's next door neighbor name on the tv show Seinfeld?",
answers: ["Elaine","George","Norton","Kramer"],
correctAnswer:"Kramer"

}];

Var game = {
    correct:0,
    incorrect:0,
    counter:120,
    countdown:function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<=0){
            console.log("Time is Up!");
            game.done();
  }
 }
},

Start;function(){

    timer= setInterval(game.countdown,1000);
$('subwrapper').prepend('<h2>Time Remaining:<span id="counter">120</span>Seconds</h2>');

for (var i=0; i< questions.length;i++){
    $('#subwrapper').append('<h2>'+questions[i].questions+'</h2');for (var j=0; j<questions[i].answers.length;j++){
        $("#subwrapper").append("<input type='radio'name='questions-"+i+"'value='"+questions[i].answers[j]+"'>",questions[i].answers[j])
 }
}
}
$('subwrapper').append('<br>button id ="end">DONE</button></br>')

done: function(){
    $.each($('input[name="question-0]":checked'),
    function(){
        if ($(this).val()==question[0].correctAnswer){
            game.correct++;
        } else{
            game.incorrect++;
        }
        $.each($('input[name="question-1]":checked'),
        function(){
            if ($(this).val()==question[1].correctAnswer){
                game.correct++;
            } else{
                game.incorrect++;
            }
            $.each($('input[name="question-2]":checked'),
            function(){
                if ($(this).val()==question[2].correctAnswer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
                $.each($('input[name="question-3]":checked'),
                function(){
                    if ($(this).val()==question[3].correctAnswer){
                        game.correct++;
                    } else{
                        game.incorrect++;
                    }
                    $.each($('input[name="question-4]":checked'),
                    function(){
                        if ($(this).val()==question[4].correctAnswer){
                            game.correct++;
                        } else{
                            game.incorrect++;
                        }
                        $.each($('input[name="question-5]":checked'),
                        function(){
                            if ($(this).val()==question[5].correctAnswer){
                                game.correct++;
                            } else{
                                game.incorrect++;
                            }
                            $.each($('input[name="question-6]":checked'),
                            function(){
                                if ($(this).val()==question[6].correctAnswer){
                                    game.correct++;
                                } else{
                                    game.incorrect++;
                                }
                                $.each($('input[name="question-7]":checked'),
                                function(){
                                    if ($(this).val()==question[7].correctAnswer){
                                        game.correct++;
                                    } else{
                                        game.incorrect++;
                                    }
    });
this.result ();
                            },
                            result: function (){
                              clearInterval (timer);
                              $('#subwrapper h2').remove();
                              $('#subwrapper').html("<h2>All done!</h2>");
                              $('#subwrapper').append("<h3>Correct Answers:"+this.correct+"</h3>");
                              $('#subwrapper').append("<h3>Incorrect Answers:"+this.incorrect+"</h3>");
                              $('#subwrapper').append("<h3>Unanswered:"+(questions.lenghth-(this.incorrect+this.correct))+"</h3>");

   
                            }
                                        
                






