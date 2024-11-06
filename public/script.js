document.addEventListener('DOMContentLoaded', function() {
    const commandInput = document.getElementById('command-input');
    const outputDiv = document.querySelector('.output');
  
      // Check if elements are correctly selected
  console.log("commandInput:", commandInput);
  console.log("outputDiv:", outputDiv);
  
    // Commands dictionary
    const commands = {
      help: "Available commands: <br> - help: Show available commands<br> - about: About me<br> - clear: Clear the terminal",
      about: "Adekojo Abimbola is an IT Operations Specialist and System Administrator.",
      clear: "clear"
    };
  
    // Handle user input
    commandInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const input = commandInput.value.trim();
        commandInput.value = '';
  
        // Display the entered command in the output
        addOutput(`visitor@mywebsite.com:~$ ${input}`);
  
        // Process the command
        if (commands[input]) {
          if (input === 'clear') {
            clearOutput();
          } else {
            addOutput(commands[input]);
          }
        } else {
          addOutput(`Command not found: ${input}. Type 'help' for a list of commands.`);
        }
      }
    });
  
    // Functions to manage output
    function addOutput(text) {
      const newLine = document.createElement('p');
      newLine.innerHTML = text;
      outputDiv.appendChild(newLine);
      outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll to bottom
    }
  
    function clearOutput() {
      outputDiv.innerHTML = '';
    }
  });
  