const fs = require('fs');

console.log("Start reading file...");

fs.readFile('info.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("End of program");
