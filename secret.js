var secretCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","Enter"];
var urStinkyCode = [];

document.addEventListener("keydown", (event) =>{
  urStinkyCode.push(event.key);
  
if(event.key == "Enter") {
    var j = urStinkyCode.length - 9
    for(var i = 0; i < urStinkyCode.length; i++) {
        if(urStinkyCode[j] == secretCode[i]) {
            j++;
        }
        else {
            break;
        }
    }
    if(j == 9) {
        funstuff();
        urStinkyCode = [];
    }
  }
});

function funstuff(){
  confetti({
        particleCount: 250,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: [ "#ff0000", "cccccc" ],
    });
        
    confetti({
        particleCount: 250,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: [ "#ff0000", "cccccc" ],
    });
};
