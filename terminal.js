var data = [
  {
    action: 'type',
    strings: ["sudo docker build -t stevenbachimont.com"],
    output: '<span class="gray">stevenbachimont.com 0.10.2 installed</span><br>&nbsp;',
    postDelay: 1000
  },
  {
    action: 'type',
    strings: ["cd terminal"],
    output: ' ',
    postDelay: 2000
  },
  {
    action: 'type',
    strings: ['sudo run terminal'],
    output: document.querySelector('.output').innerHTML,
    postDelay: 3000
  },
  {
    action: 'type',
    strings: ["Let's go!", ''],
    postDelay: 2000
  }
];

var isHovered = false;
var currentScriptTimeout;

function clearAndRunScripts() {
  var history = document.querySelector('.history');
  history.innerHTML = '';
  runScripts(data, 0);
}

var hoverElements = document.querySelectorAll('.box21');

hoverElements.forEach(function (element) {
  element.addEventListener('mouseenter', function () {
    if (!isHovered) {
      element.classList.add('flip');
      clearAndRunScripts();
      isHovered = true;
    }
  });

  element.addEventListener('mouseleave', function () {
    element.classList.remove('flip');
    isHovered = false;
    stopCurrentScript();
    clearAndReset();
  });
});

function runScripts(data, pos) {
  var prompt = document.querySelector('.prompt'),
      script = data[pos];

  if (script.clear === true) {
    document.querySelector('.history').innerHTML = '';
  }

  switch (script.action) {
    case 'type':
      // Nettoyage pour l'exécution suivante
      prompt.removeAttribute('data-typed');
      document.querySelector('.typed-cursor').textContent = '';

      typeText(prompt, script.strings, script.output, script.postDelay, pos, data);
      break;
    case 'view':
      // Gérer l'action 'view' si nécessaire
      break;
  }
}

function typeText(prompt, strings, output, postDelay, pos, data) {
  var typeSpeed = 30;
  var index = 0;

  function typeCharacter() {
    var history = document.querySelector('.history');
    var currentText = strings[0];
    var cursorText = prompt.textContent;

    cursorText += currentText.charAt(index);
    prompt.textContent = cursorText;

    if (index < currentText.length - 1) {
      index++;
      currentScriptTimeout = setTimeout(typeCharacter, typeSpeed);
    } else {
      index = 0;

      var historyText = history.innerHTML;
      historyText = historyText ? [historyText] : [];
      historyText.push('$ ' + prompt.textContent);

      if (output) {
        historyText.push(output);
        prompt.innerHTML = '';
        history.innerHTML = historyText.join('<br>');
      }

      document.querySelector('section.terminal').scrollTop = document.querySelector('section.terminal').scrollHeight;

      pos++;

      if (pos < data.length) {
        setTimeout(function () {
          runScripts(data, pos);
        }, postDelay || 1000);
      }
    }
  }

  typeCharacter();
}

function stopCurrentScript() {
  clearTimeout(currentScriptTimeout);
}

function clearAndReset() {
  var prompt = document.querySelector('.prompt');
  var history = document.querySelector('.history');
  var terminalSection = document.querySelector('section.terminal');

  prompt.textContent = '';
  history.innerHTML = '';
  terminalSection.scrollTop = 0; // Remettre la barre de défilement en haut

  // Réinitialiser d'autres états ou données si nécessaire
}


