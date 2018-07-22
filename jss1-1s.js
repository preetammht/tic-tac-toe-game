var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
 var board =
    [
        [ '_', '_', '_' ],
        [ '_', '_', '_' ],
        [ '_', '_', '_' ]
    ];
var player = 'x', opponent = 'o';

 var bestMoveR;
    var bestMoveC;
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var a9=0;
var pos;
var pos2;
var bmr;
var bmc;

   canvas.addEventListener('click', mark);
   function mark(e) {
  var sngx=	e.clientX - canvas.offsetLeft;
  var sngy=	e.clientY - canvas.offsetTop;
  if(sngx>0&&sngx<200&&sngy>0&&sngy<200&&a1==0)
  {
  	a1=1;
  	pos=1;
  	createx();
  }
   if(sngx>200&&sngx<400&&sngy>0&&sngy<200&&a2==0)
  {
  	a2=1;
  	pos=2;
  	createx();
  }
    if(sngx>400&&sngx<600&&sngy>0&&sngy<200&&a3==0)
  {
  	a3=1;
  	pos=3;
  	createx();
  }
    if(sngx>0&&sngx<200&&sngy>200&&sngy<400&&a4==0)
  {
  	a4=1;
  	pos=4;
  	createx();
  }
    if(sngx>200&&sngx<400&&sngy>200&&sngy<400&&a5==0)
  {
  	a5=1;
  	pos=5;
  	createx();
  }
    if(sngx>400&&sngx<600&&sngy>200&&sngy<400&&a6==0)
  {
  	a6=1;
  	pos=6;
  	createx();
  }
    if(sngx>0&&sngx<200&&sngy>400&&sngy<600&&a7==0)
  {
  	a7=1;
  	pos=7;
  	createx();
  }
    if(sngx>200&&sngx<400&&sngy>400&&sngy<600&&a8==0)
  {
  	a8=1;
  	pos=8;
  	createx();
  }
    if(sngx>400&&sngx<600&&sngy>400&&sngy<600&&a9==0)
  {
  	a9=1;
  	pos=9;
  	createx();
  }
}

function createx()
{ var cx;
	var cy;
	if(pos==1)
	{cx=100;
	 cy=100;
	 board[0][0]=player;
	endg();
    man();}
	if(pos==2)
	{cx=300;
	 cy=100;
	 board[0][1]=player;
	endg();
     man();}
	 if(pos==3)
	{cx=500;
	 cy=100;
	 board[0][2]=player;
	endg();
     man();}
	 if(pos==4)
	{cx=100;
	 cy=300;
	 board[1][0]=player;
	endg();
    man();}
	 if(pos==5)
	{cx=300;
	 cy=300;
	 board[1][1]=player;
	endg();
     man();}
	 if(pos==6)
	{cx=500;
	 cy=300;
	 board[1][2]=player;
	endg();
    man();}
	 if(pos==7)
	{cx=100;
	 cy=500;
	 board[2][0]=player;
	endg();
     man();}
	 if(pos==8)
	{cx=300;
	 cy=500;
	 board[2][1]=player;
	endg();
    man();}
	 if(pos==9)
	{cx=500;
	 cy=500;
	 board[2][2]=player;
	endg();
     man();}
	
		ctx.beginPath();
 ctx.moveTo(cx-20,cy-20);
 ctx.lineTo(cx+20,cy+20);
  ctx.closePath();
 ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(cx+20,cy-20);
 ctx.lineTo(cx-20,cy+20);
  ctx.closePath();
 ctx.stroke();
	

}


function createo(bmr,bmc)
{
	var ccx;
	var ccy;
	if(bmr==0&&bmc==0)
	{ccx=100;
	ccy=100;
    a1=1;
     }	
	if(bmr==0&&bmc==1)
	{ccx=300;
	ccy=100;
    a2=1;
    }
	if(bmr==0&&bmc==2)
	{ccx=500;
	ccy=100;
    a3=1;
    }
	if(bmr==1&&bmc==0)
	{ccx=100;
	ccy=300;
    a4=1;
     }
	if(bmr==1&&bmc==1)
	{ccx=300;
	ccy=300;
    a5=1;
    }
	if(bmr==1&&bmc==2)
	{ccx=500;
	ccy=300;
    a6=1;
     }
	if(bmr==2&&bmc==0)
	{ccx=100;
	ccy=500;
    a7=1;
     }
	if(bmr==2&&bmc==1)
	{ccx=300;
	ccy=500;
     a8=1;
     }
	if(bmr==2&&bmc==2)
	{ccx=500;
	ccy=500;
    a9=1;
     }

	 ctx.beginPath();
     ctx.arc(ccx,ccy,10,0,2*Math.PI);
     ctx.closePath();
     ctx.stroke();

}

 function grid()
 {
 ctx.beginPath();
 ctx.moveTo(200,0);
 ctx.lineTo(200,600);
  ctx.closePath();
 ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(400,0);
 ctx.lineTo(400,600);
  ctx.closePath();
 ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(0,200);
 ctx.lineTo(600,200);
  ctx.closePath();
 ctx.stroke();
 ctx.beginPath();
 ctx.moveTo(0,400);
 ctx.lineTo(600,400);
  ctx.closePath();
 ctx.stroke();
  }

 
grid();

var MoveR;
var MoveC;

 

 
// This function returns true if there are moves
// remaining on the board. It returns false if
// there are no moves left to play.
function isMovesLeft()
{
    for (var i = 0; i<3; i++)
        for (var j = 0; j<3; j++)
            if (board[i][j]=='_')
                return true;
    return false;
}
 
// This is the evaluation function as discussed
// in the previous article ( http://goo.gl/sJgv68 )
 function evaluate()
{
    // Checking for Rows for X or O victory.
    for (var row = 0; row<3; row++)
    {
        if (board[row][0]==board[row][1] &&
            board[row][1]==board[row][2])
        {
            if (board[row][0]==opponent)
                return +10;
            else if (board[row][0]==player)
                return -10;
        }
    }
 
    // Checking for Columns for X or O victory.
    for (var col = 0; col<3; col++)
    {
        if (board[0][col]==board[1][col] &&
            board[1][col]==board[2][col])
        {
            if (board[0][col]==opponent)
                return +10;
 
            else if (board[0][col]==player)
                return -10;
        }
    }
 
    // Checking for Diagonals for X or O victory.
    if (board[0][0]==board[1][1] && board[1][1]==board[2][2])
    {
        if (board[0][0]==opponent)
            return +10;
        else if (board[0][0]==player)
            return -10;
    }
 
    if (board[0][2]==board[1][1] && board[1][1]==board[2][0])
    {
        if (board[0][2]==opponent)
            return +10;
        else if (board[0][2]==player)
            return -10;
    }
 
    // Else if none of them have won then return 0
    return 0;
}
 
// This is the minimax function. It considers all
// the possible ways the game can go and returns
// the value of the board
function minimax( board, depth, isMax)
{
    var score = evaluate();
 
    // If Maximizer has won the game return his/her
    // evaluated score
    if (score == 10)
        return score;
 
    // If Minimizer has won the game return his/her
    // evaluated score
    if (score == -10)
        return score;
 
    // If there are no more moves and no winner then
    // it is a tie
    if (isMovesLeft()==false)
        return 0;
 
    // If this maximizer's move
    if (isMax)
    {
        var best = -1000;
 
        // Traverse all cells
        for (var i = 0; i<3; i++)
        {
            for (var j = 0; j<3; j++)
            {
                // Check if cell is empty
                if (board[i][j]=='_')
                {
                    // Make the move
                    board[i][j] = opponent;
 
                    // Call minimax recursively and choose
                    // the maximum value
                    best = Math.max( best,
                        minimax(board, depth+1, !isMax) );
 
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
 
    // If this minimizer's move
    else
    {
        var best = 1000;
 
        // Traverse all cells
        for (var i = 0; i<3; i++)
        {
            for (var j = 0; j<3; j++)
            {
                // Check if cell is empty
                if (board[i][j]=='_')
                {
                    // Make the move
                    board[i][j] =player;
 
                    // Call minimax recursively and choose
                    // the minimum value
                    best = Math.min(best,
                           minimax(board, depth+1, !isMax));
 
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}
 
// This will return the best possible move for the player
function findBestMove()
{
    var bestVal = -1000;
     bestMoveR=-1;
     bestMoveC = -1;
     
    // Traverse all cells, evalutae minimax function for
    // all empty cells. And return the cell with optimal
    // value.
    for (var i = 0; i<3; i++)
    {
        for (var j = 0; j<3; j++)
        {
            // Check if celll is empty
            if (board[i][j]=='_')
            {
                // Make the move
                board[i][j] = opponent;
 
                // compute evaluation function for this
                // move.
                var moveVal = minimax(board, 0, false);
 
                // Undo the move
                board[i][j] = '_';
 
                // If the value of the current move is
                // more than the best value, then update
                // best/
                if (moveVal > bestVal)
                {
                    bestMoveR = i;
                    bestMoveC = j;
                    bestVal = moveVal;
                }
            }
        }
    }
 
bmr=bestMoveR;
bmc=bestMoveC;
 
   // return bestMove;
}
 
// Driver code
function man()
{
   
 
     findBestMove();
     createo(bmr,bmc)
     board[bmr][bmc]=opponent;
     endg();

  
   }

function checkend()
{
   
    for (var row = 0; row<3; row++)
    {
        if (board[row][0]==board[row][1] &&
            board[row][1]==board[row][2])
        {
            if (board[row][0]==opponent)
                return 3;
            else if (board[row][0]==player)
                return 4;
        }
    }
 
    // Checking for Columns for X or O victory.
    for (var col = 0; col<3; col++)
    {
        if (board[0][col]==board[1][col] &&
            board[1][col]==board[2][col])
        {
            if (board[0][col]==opponent)
                return 3;
 
            else if (board[0][col]==player)
                return 4;
        }
    }
 
    // Checking for Diagonals for X or O victory.
    if (board[0][0]==board[1][1] && board[1][1]==board[2][2])
    {
        if (board[0][0]==opponent)
            return 3;
        else if (board[0][0]==player)
            return 4;
    }
 
    if (board[0][2]==board[1][1] && board[1][1]==board[2][0])
    {
        if (board[0][2]==opponent)
            return 3;
        else if (board[0][2]==player)
            return 4;
    }
 
   var ct=0;
   for(var i=0;i<3;i++)
   for(var j=0;j<3;j++)
   if(board[i][j]=='_')
   	ct++;
   if(ct==0)
   return 5; 

    return 0;
}
function endg()
{
	var d= checkend();
	if(d==4)
     {
     	setTimeout(function(){ctx.clearRect(0,0, canvas.width, canvas.height);
     
     ctx.fillStyle = '#000000';
      ctx.font = '36px Arial';
      ctx.textAlign = 'center';
       ctx.fillText('player  wins!!', canvas.width / 2, canvas.height / 4);}, 500);
     	
     }

     if(d==3)
     {
     	setTimeout(function(){ctx.clearRect(0,0, canvas.width, canvas.height);
     
     ctx.fillStyle = '#000000';
      ctx.font = '36px Arial';
      ctx.textAlign = 'center';
       ctx.fillText('cpu  wins!!', canvas.width / 2, canvas.height / 4);}, 500);
     }

      if(d==5)
     {
     	setTimeout(function(){ctx.clearRect(0,0, canvas.width, canvas.height);
     
     ctx.fillStyle = '#000000';
      ctx.font = '36px Arial';
      ctx.textAlign = 'center';
       ctx.fillText('draw!!', canvas.width / 2, canvas.height / 4);}, 500);
     }
}



