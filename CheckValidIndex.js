// @params: i, j, direction, number of ships
//this function checks whether the placing ships are valid or not.
//checks both overflow from the board and whether it not it will intersect with another board.


//Valid index for the first board
const validIndexForFirst = (i,j,direction,numOfShips) => {
    if(direction == "vertical")
    {
        console.log(i,j,direction,numOfShips)
        if(i + parseInt(numOfShips) <=11)
        {
            let isThere = false;
            for(let k = 0; k < numOfShips;k++)
            {
                if(visitedArrayForFirst[i-1][j-1] == true)
                {
                    console.log('YES')
                    isThere = true;
                }
                i++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
    else if(direction == "horizontal")
    {
        console.log(i,j,direction,numOfShips)
        if(j + parseInt(numOfShips) <=11)
        {
            let isThere = false;
            for(let k = 0; k < numOfShips;k++)
            {
                if(visitedArrayForFirst[i-1][j-1] == true)
                {
                    console.log('YES')
                    isThere = true;
                }
                j++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
}


//Valid index for the second board
const validIndexForSecond = (i,j,direction,numOfShips) => {
    if(direction == "vertical")
    {
        console.log(i,j,direction,numOfShips)
        if(i + parseInt(numOfShips) <=11)
        {
            let isThere = false;
            for(let k = 0; k < numOfShips;k++)
            {
                if(visitedArrayForSecond[i-1][j-1] == true)
                {
                    console.log('YES')
                    isThere = true;
                }
                i++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
    else if(direction == "horizontal")
    {
        console.log(i,j,direction,numOfShips)
        if(j + parseInt(numOfShips) <=11)
        {
            let isThere = false;
            for(let k = 0; k < numOfShips;k++)
            {
                if(visitedArrayForSecond[i-1][j-1] == true)
                {
                    console.log('YES')
                    isThere = true;
                }
                j++;
            }
            if(!isThere)
            {
                return true;
            }
            else
            {
                let inner = document.getElementsByClassName('log-wrapper')[0] 
                inner.innerHTML = "It would overlap with another ship, Try again"
            }
        }
        else
        {
            let inner = document.getElementsByClassName('log-wrapper')[0] 
            inner.innerHTML = "Out of bounds"
        }
    }
}