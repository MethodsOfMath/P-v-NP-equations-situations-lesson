// paste JavaScript here
imageNumber = 1;
height = 200;
currentHeight = 300;
key = [[1,true],[2,false],[3,false],[4,true],[5,true],[6,false],[7,false],[8,false],[9,true],[10,true],[11,false],[12,false],[13,true],[14,true],[15,false],[16,false],[17,true],[18,false],[19,true],[20,false]];

yesImages = "<h1>Yes Images</h1>";
noImages = "<h1>No Images</h1>";

function displayImage(n) {
 let image ="<img src='/images/" + n + ".png' height='"+ currentHeight + "'>";
 if (n === 1){
   image += "<p>This is proportional. Click yes to begin.</p>";
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
      let msg = "No, it's non-proportional.";
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
    let msg = "No, it's proportional.";
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
