//This function switches teams, i.e Hide one and show other, show other hide one
//since it used %2 == 0, the turns are switched perfectly

let switchTeam = document.querySelector('#switchTeams')
let kun = 0;
var button = document.getElementById("beginBtn2");
var modal = document.getElementById("switch");
var span = document.getElementsByClassName("close")[0];
switchTeam.addEventListener('click', ()=>{
        modal.style.display = "block";
        if(kun % 2 == 0)
        {
            backOfSecond.classList.add("hidden")
            backOfFirst.classList.remove('hidden')
            renderBackOfFirstBoard();
        }
        else
        {
            backOfFirst.classList.add('hidden')
            backOfSecond.classList.remove('hidden')
            renderBackOfSecondBoard();
        }
        kun++
    span.onclick = function(){
        modal.style.display = "none";
        
    }
})
