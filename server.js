// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/command', (req, res) => {
  const { command } = req.body;
  let output;

  switch (command) {
    case 'help':
      output = 'Available commands: help, date, clear, etc.';
      break;
    case 'date':
      output = `Current date and time is: ${new Date().toLocaleString()}`;
      break;
    case 'clear':
      output = 'clear';
      break;
    default:
      output = `Command not found: ${command}`;
  }

  res.json({ output });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
