

````markdown
# 🧰 File Manager CLI — Node.js Project

## 📖 Overview
This project is a **Command-Line File Manager** built using **Node.js**.  
It allows you to manage files and folders directly from the terminal — similar to basic UNIX shell commands like `mkdir`, `ls`, and `rm`.

With this CLI tool, you can:
- 📁 Create folders  
- 📄 Create files  
- 📋 List all files and folders  
- ✏️ Rename items  
- 🗑️ Delete files or folders  

---

## 🧠 Concept Definition

### ⚙️ What is a CLI (Command-Line Interface)?
A **CLI (Command-Line Interface)** is a program that accepts **commands typed by the user** in a terminal.  
Instead of using buttons or menus, users run commands like:
```bash
node index.js mkdir myFolder
````

Node.js can build CLI tools using:

* **`process.argv`** → to capture user input
* **`fs` module** → to handle files
* **`path` module** → to work with paths
* **`chalk` library** → to add colored text in the terminal

---

## 🧩 Key Modules Used

| Module      | Purpose                                                                            | Example                   |
| ----------- | ---------------------------------------------------------------------------------- | ------------------------- |
| **fs**      | File System module — allows creating, reading, writing, and deleting files/folders | `fs.writeFile()`          |
| **path**    | Handles file and folder paths safely across operating systems                      | `path.join()`             |
| **chalk**   | Adds colors and styles to terminal output for better readability                   | `chalk.green('Success!')` |
| **process** | Gives access to command-line arguments and environment info                        | `process.argv`            |

---

## 🧠 How `process.argv` Works

* `process.argv` gives all the command-line arguments passed while running a Node.js program.

Example:

```bash
node index.js mkdir testFolder
```

Then:

```js
process.argv = [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\node js\\NODE.JS\\index.js',
  'mkdir',
  'testFolder'
];
```

So we extract:

```js
const [,, command, ...args] = process.argv;
```

👉 `command` → `mkdir`
👉 `args` → `['testFolder']`

---

## 💻 Code Explanation

### 1️⃣ CLI Setup

```js
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
```

* `#!/usr/bin/env node` → Makes the file executable as a command-line script.
* Importing **fs**, **path**, and **chalk**.

---

### 2️⃣ Handle Commands

```js
const [,, command, ...args] = process.argv;
```

Extracts the command and its arguments (like `mkdir folderName`).

---

### 3️⃣ Create Folder (`mkdir`)

```js
fs.mkdir(path.join(basePath, folderName), (err) => {
  if (err) error('Error creating folder');
  else log(`Folder '${folderName}' created successfully`);
});
```

Creates a new folder in the current directory.

---

### 4️⃣ Create File (`touch`)

```js
fs.writeFile(path.join(basePath, fileName), '', (err) => {
  if (err) error('Error creating file');
  else log(`File '${fileName}' created successfully`);
});
```

Creates a blank new file.

---

### 5️⃣ List Files (`ls`)

```js
fs.readdir(basePath, (err, files) => {
  files.forEach(f => console.log(chalk.cyan(' - ' + f)));
});
```

Lists all files and folders inside the current directory.

---

### 6️⃣ Rename File/Folder (`rename`)

```js
fs.rename(oldPath, newPath, (err) => {
  if (err) error('Rename failed');
  else log(`Renamed '${oldName}' → '${newName}'`);
});
```

---

### 7️⃣ Delete File/Folder (`rm`)

```js
fs.rm(path.join(basePath, target), { recursive: true, force: true }, (err) => {
  if (err) error('Delete failed');
  else log(`'${target}' deleted successfully`);
});
```

Deletes a file or folder (recursively).

---

### 8️⃣ Help (`help`)

If no valid command is found, it prints help instructions.

---

## 🧪 Usage Commands

| Command              | Description                | Example                                |
| -------------------- | -------------------------- | -------------------------------------- |
| `mkdir <folder>`     | Create a new folder        | `node index.js mkdir myFolder`         |
| `touch <file>`       | Create a new file          | `node index.js touch notes.txt`        |
| `ls`                 | List all files and folders | `node index.js ls`                     |
| `rename <old> <new>` | Rename a file or folder    | `node index.js rename old.txt new.txt` |
| `rm <name>`          | Delete a file or folder    | `node index.js rm testFolder`          |
| `help`               | Show help message          | `node index.js help`                   |

---

## 🧾 Example Output

### ▶️ Command:

```bash
node index.js mkdir Projects
```

### 💬 Output:

```
📁 Folder 'Projects' created successfully
```

---

### ▶️ Command:

```bash
node index.js ls
```

### 💬 Output:

```
📋 Files & Folders:
 - Projects
 - notes.txt
 - index.js
```

---

### ▶️ Command:

```bash
node index.js rename notes.txt ideas.txt
```

### 💬 Output:

```
✏️ Renamed 'notes.txt' → 'ideas.txt'
```

---

### ▶️ Command:

```bash
node index.js rm Projects
```

### 💬 Output:

```
🗑️ 'Projects' deleted successfully
```



## ⚙️ Installation & Run

### 1️⃣ Initialize npm

```bash
npm init -y
```

### 2️⃣ Install dependency

```bash
npm install chalk
```

### 3️⃣ Run Commands

```bash
node index.js help
```

---

## 🧠 Key Concept Summary

| Concept            | Description                                        |
| ------------------ | -------------------------------------------------- |
| **CLI App**        | Runs commands via terminal                         |
| **process.argv**   | Reads user input                                   |
| **fs module**      | Handles file operations                            |
| **path module**    | Handles file paths safely                          |
| **chalk**          | Adds colors to CLI output                          |
| **Error handling** | Graceful message for missing args or invalid paths |

