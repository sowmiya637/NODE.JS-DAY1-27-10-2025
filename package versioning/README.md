
# 🚀 Node.js Package Versioning Example (Using Express)

## 📘 Project Overview
This project is a simple **Node.js Express app** demonstrating how **package versioning (Semantic Versioning)** works in Node.js using the `package.json` file.

It includes:
- A basic Express server.
- Explanation of Semantic Versioning (`MAJOR.MINOR.PATCH`).
- Real-time understanding of how dependency versions are managed.

---

## 🧩 What is Package Versioning?

### 📦 Definition
**Package Versioning** means assigning version numbers to software packages to indicate updates, bug fixes, or major changes.  
Node.js uses **Semantic Versioning (SemVer)** — a standard system that uses **three numbers**:

```

MAJOR.MINOR.PATCH

```

For example:
```

express@4.18.2

````

---

## 🧠 Meaning of Each Part

| Part | Meaning | Example |
|------|----------|----------|
| **MAJOR** | Big changes that may break old code | 4 |
| **MINOR** | New features, backward compatible | 18 |
| **PATCH** | Small bug fixes | 2 |

---

## ⚙️ Versioning Symbols in `package.json`

| Symbol | Meaning | Example | Allowed Versions |
|---------|----------|----------|------------------|
| `^` | Accept updates that don’t break (same MAJOR version) | `"express": "^4.18.2"` | 4.18.3 → 4.20.0 ✅ |
| `~` | Accept only patch updates | `"express": "~4.18.2"` | 4.18.3 ✅, 4.19.0 ❌ |
| (none) | Fixed version | `"express": "4.18.2"` | Only 4.18.2 ✅ |

---

## 💡 Real-Time Example

If you have:
```json
"dependencies": {
  "express": "^4.18.2"
}
````

Then when you run:

```bash
npm update
```

NPM can update Express up to **4.20.0**, but **not 5.0.0**, because the **major version** changed — it might break compatibility.



## 🧑‍💻 Code Explanation

### server.js

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Sowmiya — Running Express 4.18.2');
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
```

### Explanation:

* `require('express')` → Imports the Express framework.
* `app.get('/', ...)` → Defines a GET route at the home URL (`/`).
* `res.send()` → Sends a response message to the browser.
* `app.listen(3000)` → Runs the server at **[http://localhost:3000](http://localhost:3000)**.

---

## ⚙️ package.json

```json
{
  "name": "package-versioning",
  "version": "1.0.0",
  "description": "A simple Express app to demonstrate package versioning in Node.js",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

---

## 🧩 Commands to Run

### 1️⃣ Initialize a new project

```bash
npm init -y
```

### 2️⃣ Install Express

```bash
npm install express
```

### 3️⃣ Run the Server

```bash
node server.js
```

---

## 🌐 Output

When you visit:

```
http://localhost:3000
```

You’ll see:

```
Hello Sowmiya — Running Express 4.18.2
```

---

## 🧠 Why This Matters

Semantic Versioning helps:

* Prevent breaking your app when dependencies update.
* Keep track of new features and bug fixes safely.
* Ensure stability in production environments.

---

## ✅ Summary

| Concept                 | Description                                       |
| ----------------------- | ------------------------------------------------- |
| **Semantic Versioning** | Defines package update rules (MAJOR.MINOR.PATCH). |
| **NPM**                 | Manages project dependencies.                     |
| **Express**             | Web framework to build APIs and servers easily.   |
| **package.json**        | Stores project details and dependencies.          |

