let shipDirection = ""

let firstBoardDone = false;
let secondBoardDone = false;

let direction = "";

// This function comes to play when u click at a specific index inside the grid, whether to let you
// click or not is determined by this function.
const placingShips = (i,j,direction) => {
    //is FirstBoard Done Placing?
    if(firstBoardDone == false)
    {
        //if not work on firstBoard
        console.log(i, j)
    
        // if(currentClick < maxClick)
        // {
            

                
                // for(let i = 0; i < 10; i++)
                // {
                //     for(let j = 0; j < 10; j++)
                //     {
                               
                //     }
                // }

                console.log(direction)
                let color = ""

                if(numOfShips == 5)
                {
                    color = "carrier";
                }
                else if(numOfShips == 4)
                {
                    color = "battleship"
                }
                else if(numOfShips == 3)
                {
                    color = "cruiser"
                }
                else if(numOfShips == 2)
                {
                    color = "submarine"
                }
                else
                {
                    color = "destroyer"
                }
                


                for(let k = 0; k < numOfShips; k++)
                {
                    visitedArrayForFirst[i-1][j-1] = true;
                    var toHit = document.getElementsByClassName(`${i},${j}`)[0]
                    toHit.classList.add(color);
                    if(direction == "vertical")
                    {
                        i++;
                    }
                    else
                    {
                        j++;
                    }
                    
                    
                }
                
                numOfShips--;
                updateShipText();
            

                console.log(visitedArrayForFirst);
                if(numOfShips == 0)
                {
                    firstBoardDone = true;
                    secondBoardDone = false;

                    setTimeout(()=> {
                        RenderFirstOrSecondBoard();
                    },300)
                    
                }   	
    }
    else //work on second board if first done = true.
    //They are essentially kind of same except for the arrays that we use, we use ships[] array for first board and boxes[] array for second board
    {
            let color = ""

            console.log(numOfShips)

                if(numOfShips == 5)
                {
                    color = "carrier";
                }
                else if(numOfShips == 4)
                {
                    color = "battleship"
                }
                else if(numOfShips == 3)
                {
                    color = "cruiser"
                }
                else if(numOfShips == 2)
                {
                    color = "submarine"
                }
                else
                {
                    color = "destroyer"
                }
                


                for(let k = 0; k < numOfShips; k++)
                {
                    visitedArrayForSecond[i-1][j-1] = true;
                    var toHit = document.getElementsByClassName(`${i},${j}e`)[0]
                    toHit.classList.add(color);
                    if(direction == "vertical")
                    {
                        i++;
                    }
                    else
                    {
                        j++;
                    }
                    
                    
                }
                
                numOfShips--;
                updateShipText();
            

                console.log(visitedArrayForSecond);
                if(numOfShips == 0)
                {
                    firstBoardDone = true;
                    secondBoardDone = true;

                    setTimeout(()=> {
                        RenderFirstOrSecondBoard();
                    },300)
                    
                }
    }
    
}

