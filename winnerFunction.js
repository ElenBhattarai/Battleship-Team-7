function CheckIfWinInFirst()
{
    let count=0;
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<10;j++)
        {
            if(HitArrayForFirst[i][j] == true)
            {
                count++;
            }
        }
    }
    if(count == findTotalClickCount(maxClick))
    {
        return true;
    }
}

function CheckIfWinInSecond()
{
    let count=0;
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<10;j++)
        {
            if(HitArrayForSecond[i][j] == true)
            {
                count++;
            }
        }
    }
    if(count == findTotalClickCount(maxClick))
    {
        return true;
    }
}