
let turnSwitch = 0;
const checkIfHitInFirst = (fakebox) => {
    let i = fakebox.i;
    let j = fakebox.j;

    if(turnSwitch % 2 == 0)
    {
        alert("Not your, Player 2,switch turn now")
    }
    else
    {
        if(visitedArrayForFirst[i][j])
        {
            HitArrayForFirst[i][j] = true
            fakebox.innerHTML = 'HIT'
        }
        else
        {
            HitArrayForFirst[i][j] = false
            fakebox.innerHTML = 'MISS'
            
        }
    
        if(checkIfWinInFirst() == true)
        {
            setTimeout(()=>{
                alert("Player 2 won")
            },200)
    
            setTimeout(()=> {
                location.reload()
            },200)
        }
        turnSwitch++;
    } 
}

//Checks hit or miss
const checkIfHitInSecond = (fakebox) => {
    let i = fakebox.i
    let j = fakebox.j
   
    if(turnSwitch % 2 == 1)
    {
        alert("Not your turn, Player 1,switch turn now")
    }
    else
    {
        if(visitedArrayForSecond[i][j])
        {   
            HitArrayForSecond[i][j] = true
            fakebox.innerHTML = 'HIT' 
        }
        else
        {
            HitArrayForSecond[i][j] = false
            fakebox.innerHTML = 'MISS'
        }
    
        if(checkIfWinInSecond() == true)
        {
            setTimeout(()=>{
                alert("Player 1 won")
            },200)
    
            setTimeout(()=> {
                location.reload()
            },200)
        }
        turnSwitch++;
    }
    
}


const checkIfWinInFirst = () => {
    let hitCountFirst = 0;
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++ )
        {
            if(HitArrayForFirst[i][j] == true)
            {
                hitCountFirst++;
            }
        }
    }
    if(hitCountFirst == findTotalClickCount(numOfShips))
    {
        return true;
    }
    else
    {
        return false;
    }
}



const checkIfWinInSecond = ()=> {
    let hitCountSecond = 0; 
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            if(HitArrayForSecond[i][j] == true)
            {
                hitCountSecond++;
            }
        }
    }
    if(hitCountSecond == findTotalClickCount(numOfShips))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//using recursion to find the total count of clicks according to ship to work on the winner function
const findTotalClickCount = (maxClick) => {
    if(maxClick ==  0)
    {
        return 0;
    }
    else
    {
        return (maxClick+findTotalClickCount(maxClick-1));
    }
}