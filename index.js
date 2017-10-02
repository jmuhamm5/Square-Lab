var addBtn = document.createElement('button');
addBtn.id = 'addSquareBtn';
addBtn.innerText = 'Add Square';
//document.body.appendChild(addBtn);

var boxArea = document.createElement('div');

function addSquareBox(){
  var squareBox = document.createElement('div');
  squareBox.className = 'square-box';
  squareBox.id = document.getElementsByClassName('square-box').length;
  boxArea.appendChild(squareBox);


  squareBox.addEventListener('mouseover', function(){
      squareBox.innerText = squareBox.id;
  });


  squareBox.addEventListener('mouseout', function(){
      squareBox.innerText = "";
  });


  squareBox.addEventListener('dblclick', function(){
    if(squareBox%2 === 0){
      if(squareBox.nextSibling){
        squareBox.nextSibling.remove();
      } else {
        alert("No boxes to the right");
      }
    } else {
          if(squareBox.previousSibling){
            squareBox.previousSibling.remove();
          } else {
            alert("No boxes to the left");
          }
    }
  });
  squareBox.addEventListener('click', function(){
      var randomColor = "rgb(" + Math.floor(Math.random()*255) + ","+Math.floor(Math.random()*255) + ","+ Math.floor(Math.random()*255)+")";
      squareBox.style.backgroundColor = randomColor;
  });
}

document.addEventListener("DOMContentLoaded", function(){

    document.body.appendChild(addBtn);
    document.body.appendChild(boxArea);
    addBtn.addEventListener('click', addSquareBox);

});
