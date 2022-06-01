var numOfDrumKey = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumKey; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", keySelector);

}

function keySelector (){
    this.classList.toggle("white-color");
    makesound(this.innerHTML);

}

 document.addEventListener("keypress",function(){
 makesound(event.key);
 
 });




function makesound(key) {

  var sound;
  switch (key) {
    case "w":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "a":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    case "s":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    case "d":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "j":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "k":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "l":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
}
  }
