# 📝 To-Do List (JavaScript)

## 📌 Description

This is a simple To-Do List application built using JavaScript.
It allows users to add tasks and display them in the console.

The goal of this project is to practice basic JavaScript concepts such as:

* Arrays
* Functions
* Loops
* Console output

---

## ⚙️ Features

* Add new tasks
* View all tasks
* Simple and easy-to-understand code

---

## 🚀 How It Works

1. Tasks are stored in an array.
2. A function is used to add new tasks.
3. Another function displays all tasks in the console.

---

## 💻 Example Code

```javascript
let todoList = [];

function addTask(task) {
  todoList.push(task);
  console.log("Task added:", task);
}

function showTasks() {
  console.log("Your tasks:");
  todoList.forEach((task, index) => {
    console.log(index + 1 + ". " + task);
  });
}

addTask("Finish homework");
addTask("Study JavaScript");
showTasks();
```

---

## ▶️ How to Run

1. Make sure you have Node.js installed
2. Open your terminal
3. Run the file using:

```bash
node index.js
```

---

## 🎯 Learning Objectives

* Understand how arrays store data
* Learn how functions work in JavaScript
* Practice using loops (`forEach`)
* Improve problem-solving skills

---

## 📌 Future Improvements

* Add task deletion
* Mark tasks as completed
* Create a graphical interface (UI)

---

## 👨‍💻 Author

Mwangi Sheldon

---

## 📄 License

This project is for educational purposes.
