//Checks hit or miss
let attackCountSecond = 0;
let attackCountFirst = 0;

const checkIfHitInSecond = (fakebox) => {
    let i = fakebox.i
    let j = fakebox.j
	
	if((attackCountSecond % 2) == 0){ //keeps track of player 2's moves and only allows one per turn.
		if(visitedArrayForSecond[i][j])
		{   
			HitArrayForSecond[i-1][j-1] = true
			fakebox.innerHTML = 'HIT'
			if(checkIfHitInSecond() == true)
			{
				//prompt player 2 as winner
			}
		}
		else
		{
			HitArrayForSecond[i-1][j-1] = false
			fakebox.innerHTML = 'MISS'
		}
		attackCountSecond++
	}
	else
	{
		alert("You already took your turn!")
	}
	console.log(findTotalClickCount(maxClick))
	console.log(attackCountSecond)
}

const checkIfHitInFirst = (fakebox) => {
    let i = fakebox.i;
    let j = fakebox.j;
	
	if((attackCountFirst % 2) == 0){ //keeps track of player 1's moves and only allows one per turn.
		if(visitedArrayForFirst[i][j])
		{
			HitArrayForFirst[i-1][j-1] = true
			fakebox.innerHTML = 'HIT'
			if(checkIfHitInFirst()==true)
			{
				//prompt player 1 has won
			}
		}
		else
		{
			HitArrayForFirst[i-1][j-1] = false
			fakebox.innerHTML = 'MISS'
		}
		attackCountFirst++;
	}
	else
	{
		alert("You already took your turn!")
	}
	console.log(findTotalClickCount(maxClick))
	console.log(attackCountFirst)
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