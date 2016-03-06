// function onReady(){
//   totalTiles = 64;
//   tileHTML = '';
//
//   for (i = 0; i < totalTiles; i++) {
//     tile = '<div id="tile-'+ i +'" class="tile-'+ i +' template-tile"></div>';
//     tileHTML += tile;
//   }
//
//   alert($('#board').html());
//
//   $('#board').html(tileHTML);
// }

function onReady(){
rows = 8;
cols = 8;
tilesTotal = rows * cols;
tilesCnt = '';

function isEven(num) {
  return num % 2 == 0 ? true : false;
}

for (i = 1; i < tilesTotal+1; i++) {
  currRow = Math.ceil(i / 8);
  // determines tile color depending on current row
  tileNumClass = (function(row){
     isRowEven = isEven(row);
     console.log(isRowEven);
    if (isRowEven) {
       return isEven(i) ? 'odd' : 'even';
    } else {
      return isEven(i) ? 'even' : 'odd';
    }
  })(currRow)
  currEl = '<div id="tile-'+ i +'" class="tile ' + tileNumClass +'""></div>';
  tilesCnt += currEl;
}

$('.board').append(tilesCnt);
}
