let circularProgressList = document.querySelectorAll(".circular-progress"),
    progressValueList = document.querySelectorAll(".progress-value");

let progressStartValueList = [0, 0, 0, 0, 0, 0,0,0],
    progressEndValueList = [70, 50, 50, 70, 70, 30, 50, 40],
    speedList = [50, 50, 50, 50, 50, 50, 50, 50];

let progressList = [];

function animateProgress() {
  for (let i = 0; i < circularProgressList.length; i++) {
    progressList.push(setInterval(() => {
      progressStartValueList[i]++;
  
      progressValueList[i].textContent = `${progressStartValueList[i]}%`;
      circularProgressList[i].style.background = `conic-gradient(#7d2ae8 ${progressStartValueList[i] * 3.6}deg, #ededed 0deg)`;
  
      if (progressStartValueList[i] === progressEndValueList[i]) {
        clearInterval(progressList[i]);
      }
    }, speedList[i]));
  }
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  for (let i = 0; i < circularProgressList.length; i++) {
    if (isElementInViewport(circularProgressList[i])) {
      animateProgress();
      window.removeEventListener("scroll", handleScroll);
      break;
    }
  }
}

window.addEventListener("scroll", handleScroll);

function handleAboutClick() {
  scrollToSkills();
}

window.addEventListener("scroll", handleScroll);

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", handleAboutClick);