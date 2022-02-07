//checking for valid Index for CurrentClick > 1

const validIndex = (square,shipDirection) => {
    if(firstBoardDone == false)
    {
        let x = square.i;
        let y = square.j;

        if(shipDirection == "V")
        {
            if(x == 9)
            {
                return true;
            }
            else
            {
                if(visitedArrayForFirst[x+1][y] == maxClick || visitedArrayForFirst[x-1][y] == maxClick)
                {
                
                    return true;
                }
            }
            
        }
        else if(shipDirection == "H")
        {
            if(visitedArrayForFirst[x][y+1] == maxClick || visitedArrayForFirst[x][y-1] == maxClick)
            {
                return true;
            }
        }
        return false;
    }
    else
    {
        let x = square.i;
        let y = square.j;

        if(shipDirection == "V")
        {
            if(x == 9)
            {
                return true;
            }
            if(visitedArrayForSecond[x+1][y] == maxClick || visitedArrayForSecond[x-1][y] == maxClick)
            {
                return true;
            }
        }
        else if(shipDirection == "H")
        {
            if(visitedArrayForSecond[x][y+1] == maxClick || visitedArrayForSecond[x][y-1] == maxClick)
            {
                return true;
            }
        }
        return false;
    }
}