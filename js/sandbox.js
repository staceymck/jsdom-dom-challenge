document.addEventListener("DOMContentLoaded", function() {
  timeCounter();
  let runState = "running"

  function timeCounter() {
    const counter = document.getElementById('counter');
    let i = 0;
    setInterval(function(){
      if (runState == "running") {
        counter.innerText = i++;
      } 
    }, 1000);
  }

  //Pause Feature
  const pauseButton = document.getElementById("pause");
  pauseButton.addEventListener("click", togglePause);

  function togglePause() {
    if (pauseButton.innerText == "pause") {
      pauseButton.innerText = "resume";
      runState = "paused";
    }
    else {
      pauseButton.innerText = "pause";
      runState = "running";
    }
    toggleButtons();
  }

  function toggleButtons() {
    const nonResumeButtons = document.querySelectorAll("button:not(#pause)");
    for (i=0; i < nonResumeButtons.length; i++) {
      if (nonResumeButtons[i].disabled === true) {
        nonResumeButtons[i].removeAttribute("disabled");
      }
      else {
        nonResumeButtons[i].setAttribute("disabled", "true");
      }
    }
  }

  //Comment Feature
  document.getElementById("comment-form").addEventListener("submit", function(e){
    e.preventDefault();
    addComment();
  });

  function addComment() {
    const input = document.getElementById('comment-input');
    const list = document.getElementById('list'); 
    const p = document.createElement('p');
    const comment = document.createTextNode(input.value);
    p.appendChild(comment);
    list.appendChild(p);

    input.value = "";
  }
});