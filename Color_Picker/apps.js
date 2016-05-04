$( document ).ready(function() {
    $( "a" ).click(function() {

	alert( "You look like you'd like to play a game!" );
        
    });
 console.log (alert);
});

var colorArray = ['red', 'blue', 'yellow', 'green'];

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

 var red = $("Red Block").click(function(){
        $("div").data(red);
    });
 var blue = $("#Blue Block").click(function(){
        $("div").data(blue);
  });
 var green = $("#Green Block").click(function(){
       $("div").data(yellow);
        
 var yellow = $("#Yellow Block").click(function(){
       $("div").data(green); 
    });
});

  

//Prompt question: Want to play?
//append <div>s to the DOM
      
//<button id="Red Block"></button>
//<button id="Blue Block"></button>
//<button id="Green Block"></button>
//<button id="Yellow Block"></button>


//Make Red = true (and other colors)


var rightColor;
//var rightColor = prompt("Can you click on the right color? CAN YOU?");
switch(colorArray) {
    case "Red":
        text = "Red!";
        break;
    case "Blue":
        text = "Blue!";
        break;
    case "Yellow":
        text = "Yellow!";
        break;
    case "Green":
        text = "Green.";
        break;
    case "":
        text = "WRONG! WRONG COLOR!";
        break;
    default:
        text = "";
        break;
}

/*$('button').click(function(){
});

$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});

