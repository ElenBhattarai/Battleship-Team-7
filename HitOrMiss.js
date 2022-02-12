
let turnSwitch = 0;
const checkIfHitInFirst = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;

  if (turnSwitch % 2 == 0) {
    alert("Not your, Player 2,switch team now");
  } else {
    if (visitedArrayForFirst[i][j]) {
      HitArrayForFirst[i][j] = true;
      fakebox.classList.add(".hit-box");
      fakebox.innerHTML = "✅";
      let inner = document.getElementsByClassName('log-wrapper')[0] 
      inner.innerHTML = "HIT !!! Switch Team now."
    } else {
      HitArrayForFirst[i][j] = false;
      fakebox.classList.add(".miss-box");
      fakebox.innerHTML = "❌";
      let inner = document.getElementsByClassName('log-wrapper')[0] 
      inner.innerHTML = "MISS !!! Switch Team now."
    }

    if (checkIfWinInFirst() == true) {
      setTimeout(() => {
        alert("Player 2 won");
      }, 200);

      setTimeout(() => {
        location.reload();
      }, 200);
    }
    turnSwitch++;
    switchTeam.classList.remove("hidden");
  }
};

//Checks hit or miss
const checkIfHitInSecond = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;

  if (turnSwitch % 2 == 1) {
    alert("Not your turn, Player 1,switch team now");
  } else {
    if (visitedArrayForSecond[i][j]) {
      HitArrayForSecond[i][j] = true;
      fakebox.classList.add(".hit-box");
      fakebox.innerHTML = "✅";
      let inner = document.getElementsByClassName('log-wrapper')[0] 
      inner.innerHTML = "HIT !!! Switch Team now."
    } else {
      HitArrayForSecond[i][j] = false;
      fakebox.classList.add(".miss-box");
      fakebox.innerHTML = "❌";
      let inner = document.getElementsByClassName('log-wrapper')[0] 
      inner.innerHTML = "MISS !!! Switch Team now."
    }

    if (checkIfWinInSecond() == true) {
      setTimeout(() => {
        alert("Player 1 won");
      }, 200);

      setTimeout(() => {
        location.reload();
      }, 200);
    }
    turnSwitch++;
    switchTeam.classList.remove("hidden");
  }
};

const checkIfWinInFirst = () => {
  let hitCountFirst = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (HitArrayForFirst[i][j] == true) {
        hitCountFirst++;
      }
    }
  }
  if (hitCountFirst == findTotalClickCount(parseInt(originalNum))) {
    console.log("haha");
    return true; 
  } else {
    return false;
  }
  
};

const checkIfWinInSecond = () => {
  let hitCountSecond = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (HitArrayForSecond[i][j] == true) {
        hitCountSecond++;
      }
    }
  }
  
  if (hitCountSecond == findTotalClickCount(parseInt(originalNum))){
    return true;
  } else {
    return false;
  }
 
};

//using recursion to find the total count of clicks according to ship to work on the winner function
const findTotalClickCount = (originalNum) => {
  if (originalNum == 0) {
    return 0;
  } else {
    return originalNum + findTotalClickCount(originalNum - 1);
  }
}