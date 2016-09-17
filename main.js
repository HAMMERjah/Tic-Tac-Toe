var canvas = document.getElementById('canvas'),
    clear = document.getElementById('clear'),
    redraw = document.getElementById('redraw'),
    c = canvas.getContext('2d');

var winConditionMet = false, turnCounter = 0, winner,
    turn = 'X', diag1 = [], diag2 = [],
    col1 = [], col2 = [], col3 = [], 
    row1 = [], row2 = [], row3 = [];

Array.prototype.threeInARow = function(){
  if( this.length !== 3 ){ 
    return false; 
  }
  for( var i = 1; i < this.length; i++ ){
    if( this[i] !== this[0] ){
      return false; 
    }
  } 
  return true; 
}

clear.addEventListener('click', function(){
  clear();
});

redraw.addEventListener('click', function(){
  redraw();
});

canvas.addEventListener('click', placeMarker);

function placeMarker(event) {
  var x = event.offsetX, 
      y = event.offsetY;
  
  c.font = '200px sans-serif';
  
  if( turn === 'X'){ marker = 'X'; } 
  else { marker = 'O'; }
  
  //col 1
  if( x > 0  && x < 200){
    if( y > 0 && y < 200 ){
      if( row1[0] == null ){
        c.fillText(marker, 30, 170);
        turnCounter++;
        row1[0] = marker; col1[0] = marker; diag1[0]= marker;
        checkForWinCondition();
        switchTurns();
      } 
    }
    else if( y > 200 && y < 400 ){
      if( row2[0] == null ){
        c.fillText(marker, 30, 365);
        turnCounter++;
        row2[0] = marker; col1[1] = marker;
        checkForWinCondition();
        switchTurns();
      }  
    }
    else if( y > 400 && y < 600 ){
      if( row3[0] == null ){
        c.fillText(marker, 30, 575);
        turnCounter++;
        row3[0] = marker; col1[2] = marker; diag2[0] = marker;
        checkForWinCondition();
        switchTurns();
      }
    }
  };
  //col 2
  if( x > 200 && x < 400 ){
    if( y > 0 && y < 200 ){
      if( row1[1] == null ){
        c.fillText(marker, 235, 170);
        turnCounter++;
        row1[1] = marker; col2[0] = marker;
        checkForWinCondition();
        switchTurns();
      }
    }
    else if( y > 200 && y < 400 ){
      if( row2[1] == null ){
        c.fillText(marker, 235, 365);
        turnCounter++;
        row2[1] = marker; col2[1] = marker; diag1[1] = marker; diag2[1] = marker;    
        checkForWinCondition();
        switchTurns();
      }
    }
    else if( y > 400 && y < 600 ){
      if( row3[1] == null ){
        c.fillText(marker, 235, 575);
        turnCounter++;
        row3[1] = marker; col2[2] = marker;
        checkForWinCondition();
        switchTurns();
      }
    }
  };
  //col 3
  if( x > 400 && x < 600){
    if( y > 0 && y < 200 ){
      if( row1[2] == null ){
        c.fillText(marker, 425, 170);
        turnCounter++;
        row1[2] = marker; col3[0] = marker; diag2[2] = marker;
        checkForWinCondition();
        switchTurns();
      }      
    }
    else if( y > 200 && y < 400 ){
      if( row2[2] == null ){
        c.fillText(marker, 425, 365);
        turnCounter++;
        row2[2] = marker; col3[1] = marker;
        checkForWinCondition();
        switchTurns();
      }      
    }
    else if( y > 400 && y < 600 ){
      if( row3[2] == null ){
        c.fillText(marker, 425, 575);
        turnCounter++;
        row3[2] = marker; col3[2] = marker; diag1[2] = marker;
        checkForWinCondition();
        switchTurns();
      }     
    }
  }; 
};
