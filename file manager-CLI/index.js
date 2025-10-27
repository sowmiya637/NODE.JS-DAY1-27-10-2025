#!/usr/bin/env node
//  makes it executable as CLI command

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Get command-line arguments
const [,, command, ...args] = process.argv;

const basePath = process.cwd(); // current working directory

// Helper function for colored messages
const log = (msg) => console.log(chalk.green(msg));
const error = (msg) => console.log(chalk.red(msg));

switch(command) {
  //  Create Folder
  case 'mkdir':
    const folderName = args[0];
    if (!folderName) return error(' Please provide a folder name');
    fs.mkdir(path.join(basePath, folderName), (err) => {
      if (err) error(' Error creating folder: ' + err.message);
      else log(` Folder '${folderName}' created successfully`);
    });
    break;

  //  Create File
  case 'touch':
    const fileName = args[0];
    if (!fileName) return error(' Please provide a file name');
    fs.writeFile(path.join(basePath, fileName), '', (err) => {
      if (err) error(' Error creating file: ' + err.message);
      else log(` File '${fileName}' created successfully`);
    });
    break;

  //  List Files & Folders
  case 'ls':
    fs.readdir(basePath, (err, files) => {
      if (err) error(' Unable to list files: ' + err.message);
      else {
        log(' Files & Folders:');
        files.forEach(f => console.log(chalk.cyan(' - ' + f)));
      }
    });
    break;

  //  Rename File/Folder
  case 'rename':
    const [oldName, newName] = args;
    if (!oldName || !newName) return error(' Usage: rename <old> <new>');
    fs.rename(path.join(basePath, oldName), path.join(basePath, newName), (err) => {
      if (err) error(' Rename failed: ' + err.message);
      else log(` Renamed '${oldName}' → '${newName}'`);
    });
    break;

  //  Delete File/Folder
  case 'rm':
    const target = args[0];
    if (!target) return error(' Please provide a file or folder to delete');
    fs.rm(path.join(basePath, target), { recursive: true, force: true }, (err) => {
      if (err) error(' Delete failed: ' + err.message);
      else log(` '${target}' deleted successfully`);
    });
    break;

  //  Help
  case 'help':
  default:
    console.log(chalk.yellow(`
 File Manager CLI - Commands:
----------------------------------------
mkdir <folder>       → Create a new folder
touch <file>         → Create a new file
ls                   → List files & folders
rename <old> <new>   → Rename file/folder
rm <name>            → Delete file/folder
help                 → Show this help message
----------------------------------------
Example:
  node index.js mkdir testFolder
  node index.js touch test.txt
`));
}
