var values = ["red", "blue", "green", "yellow"];
var patterns = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextuserClickedPattern() {
    userClickedPattern=[];
    var random = Math.floor(Math.random()*4);
    var value = values[random];
    patterns.push(value);
    $("#"+value).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(value);
    $("#"+"level-title").text("Level "+level);
    level++;
}

function sound(button) {
    var audio = new Audio("sounds/" + button + ".mp3");
    audio.play();
}

function animatePress(button) {
    $("#"+button).addClass("pressed");
    setTimeout(function(){
        $("#"+button).removeClass("pressed");
    },100);
}

$(".btn").click(function() {
    var id_selected = $(this).attr("id");
    userClickedPattern.push(id_selected);
    sound(id_selected);
    animatePress(id_selected);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function() {
    if (started == false) {
        $("#"+"level-title").text("Level " + level);
        nextuserClickedPattern();
        started = true;
    }
});

function checkAnswer(actual_level) {
    if(patterns[actual_level] == userClickedPattern[actual_level]) {
        if(patterns.length ==  userClickedPattern.length) {
            setTimeout(function(){
                nextuserClickedPattern();
            },1000)
        }
    }
    else {
        sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#"+"level-title").text("Game over, Press Any Key to Restart");
        restart();
    }
}

function restart() {
    level=0;
    patterns=[];
    started = false;
}
