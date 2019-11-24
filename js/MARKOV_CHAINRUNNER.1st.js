(function (root) {
  var isRunning = false;

  var clearNodeStates = function () {
    Array.prototype.forEach.call(
      document.querySelectorAll('.state'),
      function (node) {
        node.classList.remove('current');
      }
    )
  };

  var setCurrentState = function (state) {
    document.getElementById(
      state
    ).classList.add(
      'current'
    );
  };

  var weightedRandom = function (spec) {
    var sum = 0, 
        random = Math.random();

    for (var i in spec) {
      var state = spec[i];
      sum += state[0];
      if (random <= sum) {
        return state[1]
      };
    }
  };

  var isRunning = false;

  var nextState = function (prev) {
    clearNodeStates();
    setCurrentState(prev);

    var states = root.__TRANSITIONS__[prev];
    var sorted = states.concat().sort(function (state) {
      return state[0];
    });

    if (isRunning) {
      requestAnimationFrame(function () {
        setTimeout(function () {
          nextState(weightedRandom(sorted));
        }, 500);
      });
    }

    var output = document.getElementById('output');
    var paragraph = document.createElement('p');
    paragraph.innerHTML = root.__STORY__[prev];
    output.appendChild(paragraph);
    output.scrollTop = output.scrollHeight;
  };

  var startButton = document.getElementById('start');
  startButton.addEventListener('click', function () {
    isRunning = !isRunning;
    clearNodeStates();
    nextState(root.__INITIAL_STATE__);

    if (isRunning) {
      startButton.innerHTML = startButton.dataset.toggle;
    } else {
      startButton.innerHTML = startButton.dataset.continue;
    }
  });
})(window);