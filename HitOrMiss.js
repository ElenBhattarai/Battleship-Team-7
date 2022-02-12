let turnSwitch = 0;
const checkIfHitInFirst = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;

  if (turnSwitch % 2 == 0) {
    alert("Player 2, you took your turn... Switch now!");
  } else {
    if(HitArrayForFirst[i][j] == true || HitArrayForFirst[i][j] == false)
    {
      let inner = document.getElementsByClassName('log-wrapper')[0]
      inner.innerHTML = "Already clicked that space. Try again !"
    }
    else
    {
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
          alert("Player 2 WINS!!");
        }, 200);

        setTimeout(() => {
          location.reload();
        }, 200);
      }
      turnSwitch++;
      switchTeam.classList.remove("hidden");
    }
  }
};

//Checks hit or miss
const checkIfHitInSecond = (fakebox) => {
  let i = fakebox.i;
  let j = fakebox.j;

  if (turnSwitch % 2 == 1) {
    alert("Player 1, you took your turn... Switch now!");
  } else {
    if(HitArrayForSecond[i][j] == true || HitArrayForSecond[i][j] == false)
    {
      let inner = document.getElementsByClassName('log-wrapper')[0]
      inner.innerHTML = "Already clicked that space. Try again !"
    }
    else
    {
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
          alert("Player 1 WINS!!");
        }, 200);

        setTimeout(() => {
          location.reload();
        }, 200);
      }
      turnSwitch++;
      switchTeam.classList.remove("hidden");
    }
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
  if (hitCountSecond == findTotalClickCount(parseInt(originalNum))) {
    return true;
  } else {
    return false;
  }
};

//using recursion to find the total count of clicks according to ship to work on the winner function
const findTotalClickCount = (maxClick) => {
  if (maxClick == 0) {
    return 0;
  } else {
    return maxClick + findTotalClickCount(maxClick - 1);
  }
}
