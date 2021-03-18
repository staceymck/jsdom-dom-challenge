document.addEventListener("DOMContentLoaded", function() {
  
  let i = 0;
  let runState = "running";
  const counter = document.getElementById("counter");
  timeCounter();

  function timeCounter() {
    setInterval(function(){
      if (runState == "running") {
        incrementCounter();
      } 
    }, 1000);
  }

  //Plus feature
  const plus = document.getElementById("plus");
  plus.addEventListener("click", incrementCounter);

  function incrementCounter() {
    counter.innerText = parseInt(counter.innerHTML, 10) + 1;
  }

  //Like feature
  const heart = document.getElementById("heart");
  heart.addEventListener("click", addLike);

  function addLike() {
    const li = document.createElement('li');
    const ul = document.getElementsByClassName("likes");

    li.innerHTML = counter.innerHTML;
    ul[0].appendChild(li); 
  }

  //Minus feature
  const minus = document.getElementById("minus");
  minus.addEventListener("click", decrementCounter);

  function decrementCounter() {
    counter.innerText = parseInt(counter.innerHTML, 10) - 1;
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

  // Refactored Comment Feature
  document.getElementById("comment-form").addEventListener("submit", function(e){
    e.preventDefault();
    const p = document.createElement('p');
    p.innerHTML = e.target.comment.value;
    document.getElementById("list").append(p);
    e.target.reset;
  });


  //Initial Comment Feature
  
  // document.getElementById("comment-form").addEventListener("submit", function(e){
  //   e.preventDefault();
  //   addComment();
  // });

  // function addComment() {
  //   const input = document.getElementById('comment-input');
  //   const list = document.getElementById('list'); 
  //   const p = document.createElement('p');
  //   const comment = document.createTextNode(input.value);
  //   p.appendChild(comment);
  //   list.appendChild(p);

  //   input.value = "";
  // }
});



