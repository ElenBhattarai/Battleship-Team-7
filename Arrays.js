//All Our Arrays.

//Array that get's updated after the Ships are placed on the first Board.
let ships = [];
for(let i = 0; i < 10; i++)
{
	ships[i] = new Array();
}


//Array that get's updated after the Ships are place on the second board. 
let boxes = [];
for(let i = 0; i < 10; i++)
{
    boxes[i] = new Array();
}

//Array that contains all the indexes of the Ships that are placed on first board. Contains true in the indexes there are ships. 
let visitedArrayForFirst = [];
for(let i = 0; i < 10; i++)
{
    visitedArrayForFirst[i] = new Array();
}

//Array that contains all the indexes of the Ships that are placed on second board. Contains true in the indexes there are ships.
let visitedArrayForSecond = [];
for(let i = 0; i < 10; i++)
{
    visitedArrayForSecond[i] = new Array();
}

//Array that checks where the 'Hit' indexes where for the first Array
let HitArrayForFirst = [];
for(let i = 0; i < 10; i++)
{
    HitArrayForFirst[i] = new Array();
}

//Array that checks whether the 'Hit' indexes where for the second Array.
let HitArrayForSecond = [];
for(let i = 0; i < 10; i++)
{
    HitArrayForSecond[i] = new Array()
}