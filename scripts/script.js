// paste JavaScript here
imageNumber = 1;
height = 200;
currentHeight = 300;
key = [[1,true],[2,false],[3,false],[4,false],[5,false],[6,false],[7,true],[8,false],[9,false],[10,false],[11,false],[12,true],[13,false],[14,true],[15,false],[16,false],[17,false],[18,false],[19,true],[20,true],[21,true],[22,true],[23,false],[24,false],[25,true],[26,false],[27,false],[28,true],[29,false],[30,true],[31,false],[32,false],[33,false],[34,false],[35,false],[36,false],[37,true],[38,false],[39,true],[40,false],[41,false],[42,false]];

yesImages = "<h1>Yes Images</h1>";
noImages = "<h1>No Images</h1>";

function displayImage(n) {
 let image ="<img src='https://raw.githubusercontent.com/MethodsOfMath/yes-no-game-proportional/refs/heads/master/images/" + n + ".png' height='"+ currentHeight + "'>";
 if (n === 1){
   image += "<p>This is a yes. Click yes to begin.</p>";
 }
  document.getElementById("current-image").innerHTML = image;
}

function yes(){ 
  if (key[imageNumber-1][1]) {
    let msg = "You are correct!";
    document.getElementById("message").innerHTML = msg;
  yesImages += "<img src='https://raw.githubusercontent.com/MethodsOfMath/yes-no-game-proportional/refs/heads/master/images/" + imageNumber + ".png' height='" + height + "'>";
  document.getElementById("yesImages").innerHTML = yesImages;
  } else {
      let msg = "No, it's a no.";
      document.getElementById("message").innerHTML = msg;
    noImages += "<img src='https://raw.githubusercontent.com/MethodsOfMath/yes-no-game-proportional/refs/heads/master/images/" + imageNumber + ".png' height='" + height + "'>";
  document.getElementById("noImages").innerHTML = noImages;
  }
  if (imageNumber < 39) {
  imageNumber += 1;
  displayImage(imageNumber);
  } else {
    let msg = "Activity complete!";
    document.getElementById("message").innerHTML = msg;
  }
}


function no(){ 
  if (key[imageNumber-1][1]) {
    let msg = "No, it's a yes.";
    document.getElementById("message").innerHTML = msg;
  yesImages += "<img src='https://raw.githubusercontent.com/MethodsOfMath/yes-no-game-proportional/refs/heads/master/images/" + imageNumber + ".png' height='" + height + "'>";
  document.getElementById("yesImages").innerHTML = yesImages;
  } else {
      let msg = "You are correct.";
      document.getElementById("message").innerHTML = msg;
    noImages += "<img src='https://raw.githubusercontent.com/MethodsOfMath/yes-no-game-proportional/refs/heads/master/images/" + imageNumber + ".png' height='" + height + "'>";
  document.getElementById("noImages").innerHTML = noImages;
  }
  if (imageNumber < 39) {
  imageNumber += 1;
  displayImage(imageNumber);
  } else {
    let msg = "Activity complete!";
    document.getElementById("message").innerHTML = msg;
  }
}

displayImage(1);
