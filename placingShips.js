let shipDirection = ""

let firstBoardDone = false;
let secondBoardDone = false;

// This function comes to play when u click at a specific index inside the grid, whether to let you
// click or not is determined by this function.
const placingShips = (square) => {
    //is FirstBoard Done Placing?
    if(firstBoardDone == false)
    {
        //if not work on firstBoard
        console.log(square.i, square.j)
        if(currentClick < maxClick)
        {
            if(!ships[parseInt(square.i)][parseInt(square.j)])
            {
                //currentClick is the counter that keeps track of how many times you've clicked for a ship
                // it is reset for every ship so after you place a 1x1 ship the currentClick goes to 1, but is reset to 0 before placing second ship 
                // After you place the first box of 1x2 and second box of 1x2 ship, it becomes 2, but it again resets to 0 before placing third ship
                if(currentClick < 1)
                {
                    //You can place anywhere for the first box of any ship
                    lastIndex.i = square.i;
                    lastIndex.j = square.j;

                    //place the ship there.
                    placeTheShip(square);
                }
                else if(currentClick  == 1)
                {
                    //checks to make sure users are clicking on the right place when the current Click is 1, i.e. placing the second box attached to first One.
                    if(square.i == lastIndex.i || square.j == lastIndex.j)
                    {
                        if(Math.abs(lastIndex.i-square.i) == 1 || Math.abs(square.j-lastIndex.j) == 1)
                        {
                            if(Math.abs(lastIndex.j - square.j) == 1 && lastIndex.i == square.i)
                            {
                                shipDirection = "H"
                            }
                            else if(Math.abs(lastIndex.i - square.i) == 1 && lastIndex.j == square.j)
                            {
                                shipDirection = "V"
                            }

                            // above are a bunch of checks to make sure they're placing in this right place and if they are
                            //we fire this function to place the ship there.
                            placeTheShip(square);
                        }
                    }
                }
                else
                {
                    //from CurrentClick == 3, things start getting more complicated so I made a different file called CheckValidIndex.js with a function
                    //that takes the box use is trying to click on, and also the ship Direction, i.e horizontal or vertical.
                    if(validIndex(square,shipDirection) == true)
                    {
                        //if the index is valid, place the ship
                        placeTheShip(square);
                        
                        //if the first board is done placing ship...
                        if(maxClick == numOfShips && currentClick == numOfShips)
                        {
                            //switch firstBoard Done to true
                            firstBoardDone = true;

                            //call the RenderFirstOrSecondBoard() function which is on Executive.js
                            RenderFirstOrSecondBoard();
                        }
                    }
                }
            }
        }	
    }
    else //work on second board if first done = true.
    //They are essentially kind of same except for the arrays that we use, we use ships[] array for first board and boxes[] array for second board
    {
        console.log(square.i, square.j)
        if(currentClick < maxClick)
        {
            if(!boxes[parseInt(square.i)][parseInt(square.j)])
            {
                if(currentClick < 1)
                {
                    lastIndex.i = square.i;
                    lastIndex.j = square.j;

                    placeTheShip(square);
                }
                else if(currentClick  == 1)
                {
                    if(square.i == lastIndex.i || square.j == lastIndex.j)
                    {
                        if(Math.abs(lastIndex.i-square.i) == 1 || Math.abs(square.j-lastIndex.j) == 1)
                        {
                            if(Math.abs(lastIndex.j - square.j) == 1 && lastIndex.i == square.i)
                            {
                                shipDirection = "H"
                            }
                            else if(Math.abs(lastIndex.i - square.i) == 1 && lastIndex.j == square.j)
                            {
                                shipDirection = "V"
                            }
                            placeTheShip(square);
                        }
                    }
                }
                else
                {
                    if(validIndex(square,shipDirection) == true)
                    {
                        placeTheShip(square);

                        //after second board placing is all done:
                        if(maxClick == numOfShips && currentClick == numOfShips)
                        {
                            secondBoardDone = true;
                            //After second board is done placing, this function is again called:
                            RenderFirstOrSecondBoard();
                        }
                    }   
                }
            }
        }	
    }
    
}

// This is called after valid index is ensured.
const placeTheShip = (square) => {
    // Work on the firstBoard or second?....
    if(firstBoardDone == false)
    {
        //if firstBoardDone is false, we work on the first board

        //see Arrays.js for all the arrays used here.
        ships[parseInt(square.i)][parseInt(square.j)] = true;
        visitedArrayForFirst[parseInt(square.i)][parseInt(square.j)] = maxClick;
        square.style.background = colors[maxClick-1];
        currentClick++;

        //resetting maxClick
        if(currentClick == maxClick)
        {
            if(maxClick < numOfShips)
            {
                maxClick++;
                currentClick = 0;
            }
        }
    }
    else //if firstBoardDone is false, we work on the first board
    {
        //see Arrays.js for all the Arrays here.
        boxes[parseInt(square.i)][parseInt(square.j)] = true;
        visitedArrayForSecond[parseInt(square.i)][parseInt(square.j)] = maxClick;
        square.style.background = colors[maxClick-1];
        currentClick++;

        //resetting MaxClick
        if(currentClick == maxClick)
        {
            if(maxClick < numOfShips)
            {
                maxClick++;
                currentClick = 0;
            }
        }
    }
}