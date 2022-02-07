//Checks hit or miss
const checkIfHitInSecond = (fakebox) => {
    let i = fakebox.i
    let j = fakebox.j

    if(visitedArrayForSecond[i][j])
    {   
        HitArrayForSecond[i-1][j-1] = true
        fakebox.innerHTML = 'HIT' 
    }
    else
    {
        HitArrayForSecond[i-1][j-1] = false
        fakebox.innerHTML = 'MISS'
    }
}

const checkIfHitInFirst = (fakebox) => {
    let i = fakebox.i;
    let j = fakebox.j;

    if(visitedArrayForFirst[i][j])
    {
        HitArrayForFirst[i-1][j-1] = true
        fakebox.innerHTML = 'HIT'
    }
    else
    {
        HitArrayForFirst[i-1][j-1] = false
        fakebox.innerHTML = 'MISS'
        
    }
    console.log(findTotalClickCount(maxClick))
}


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