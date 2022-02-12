//This function switches teams, i.e Hide one and show other, show other hide one
//since it used %2 == 0, the turns are switched perfectly

let switchTeam = document.querySelector('#switchTeam')
let kun = 0;
switchTeam.addEventListener('click', ()=>{
    if(kun % 2 == 0)
    {
        backOfSecond.classList.add("hidden")
        backOfFirst.classList.remove('hidden')
        renderBackOfFirstBoard();
    }
    else
    {
        backOfSecond.classList.remove('hidden')
        backOfFirst.classList.add('hidden')
        renderBackOfSecondBoard();
    }
    kun++
})