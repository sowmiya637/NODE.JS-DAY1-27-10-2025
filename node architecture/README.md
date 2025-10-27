

````markdown
# 📘 Node.js File System (fs) Module — Reading Files Example

## 📂 Project Overview
This project demonstrates how to **read files asynchronously** in Node.js using the **File System (`fs`) module**.  
It shows how Node.js handles **non-blocking I/O** — meaning your program can continue running while reading a file in the background.

---

## 🧠 What is the File System (`fs`) Module?

### 📦 Definition
The **File System (fs)** module in Node.js allows interaction with the computer’s file system.  
It helps you:
- Create, read, write, and delete files.  
- Work with directories.  
- Handle file streams efficiently.

It’s a **core module**, so you **don’t need to install it** using npm — just use `require('fs')`.

---

## ⚙️ Code Used in This Project

### `readFile.js`
```js
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
````

---

## 🧩 How It Works — Step by Step

### 1️⃣ Import the `fs` Module

```js
const fs = require('fs');
```

This loads the built-in **File System module** to work with files.

---

### 2️⃣ Print “Start reading file...”

```js
console.log("Start reading file...");
```

This executes immediately — before the file reading starts.

---

### 3️⃣ Read the File Asynchronously

```js
fs.readFile('info.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("File content:", data);
});
```

* `fs.readFile()` reads the file **without blocking** the main thread.
* `'info.txt'` → file name to read.
* `'utf8'` → encoding format for readable text.
* The **callback function** runs *after* the file has been read:

  * If an error occurs → prints the error.
  * If successful → prints the file content.

---

### 4️⃣ Print “End of program”

```js
console.log("End of program");
```

This line executes **before** the file finishes reading — because `readFile` is **asynchronous**.

---

## 🧠 Concept: Asynchronous vs Synchronous

| Type             | Function            | Description                                                  |
| ---------------- | ------------------- | ------------------------------------------------------------ |
| **Asynchronous** | `fs.readFile()`     | Reads file *in background* without blocking the main thread. |
| **Synchronous**  | `fs.readFileSync()` | Blocks execution until file reading is complete.             |

### Example of Synchronous (for comparison):

```js
const data = fs.readFileSync('info.txt', 'utf8');
console.log(data);
```

> ❗ The program waits until reading finishes — slower but simpler.

---

## 🧪 Example Execution

### Contents of `info.txt`

```
Hello Sowmiya — Welcome to Node.js File System Module!
```

### Output on Terminal

```
Start reading file...
End of program
File content: Hello Sowmiya — Welcome to Node.js File System Module!
```

✅ Notice that “End of program” prints **before** “File content” — this shows **asynchronous execution**.


## ⚙️ Run the Program

### 1️⃣ Create a file `info.txt`

Add some text inside it.

### 2️⃣ Run the JavaScript file

```bash
node readFile.js
```

---

## 🧠 Why Use Asynchronous File Reading?

* Prevents your program from **freezing** during long file reads.
* Improves **performance** and **responsiveness**.
* Allows **parallel operations** (I/O + computation).

---

## ✅ Summary

| Concept                 | Description                          |
| ----------------------- | ------------------------------------ |
| **Module Used**         | `fs` (File System)                   |
| **Method**              | `fs.readFile()`                      |
| **Type**                | Asynchronous (non-blocking)          |
| **Callback Parameters** | `(err, data)`                        |
| **Encoding**            | `'utf8'` for readable text           |
| **Benefit**             | Program continues while reading file |


