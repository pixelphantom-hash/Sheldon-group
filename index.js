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
showTasks();let todoList = [];

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
