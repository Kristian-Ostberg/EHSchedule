var secretCode= ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","Enter"];
var urStinkyCode=[];
document.addeventlistener("keydown", (event) =>{
  urStinkycode.push(event.key);
  for(var i; i<urStinkycode.length; i++){
    if(urStinkyCode[i] != secretCode[i]){
      urStinkyCode=[];
      break;
    if(i==secretCode.length-1){
      funstuff();
    }
  }
})
fucntion funstuff(){
  confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(100, 150),
        origin: { y: 0.6 }
      });
}
