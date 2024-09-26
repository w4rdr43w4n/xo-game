const gamePad = document.querySelector('.gamePad');

const cells = document.querySelectorAll('.cell');

const stat = document.querySelector('p.turns');

const res = document.querySelector('.restart');

let isX = true;

let GameOver = false;

options = ["","","","","","","","",""];

win_prob = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function restart(){
  options = ["","","","","","","","",""];

  cells.forEach( cell =>{
    cell.textContent = ''; 
    cell.style.color = '#fff'
  });

  isX = true;
  GameOver = false;

  stat.textContent = `X's turn`;

}

cells.forEach( cell =>{
  cell.addEventListener('click',()=>{
    if(cell.textContent =='' && !GameOver){
      let index = cell.getAttribute('cellIndex');
      options[index] = player();
      cell.textContent =  player();
      check_win();
      if(!GameOver){change_player();}
    }
  });
});

function change_player(){
  if(isX){
    isX = false;
    stat.textContent = `${player()}'s turn`;
  }
  else{
    isX = true;
    stat.textContent = `${player()}'s turn`;
  }
}

function player(){
  return (isX)? 'X':'O';
}


function check_win(){
  win_prob.forEach(win =>{
    let cellA = options[win[0]];
    let cellB = options[win[1]];
    let cellC = options[win[2]];
    if((cellA == cellB && cellB == cellC) && !(cellA == '')){
      stat.textContent = `${player()} wins!`;
      GameOver = true;
      color(win[0],win[1],win[2]);
    }
  })
}

function color(a,b,c){
  cells[a].style.color = '#33ff00';
  cells[b].style.color = '#33ff00';
  cells[c].style.color = '#33ff00';
  
}

res.addEventListener('click',restart);