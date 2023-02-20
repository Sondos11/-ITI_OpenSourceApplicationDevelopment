let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//empty array to store the tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

//Add Task
submit.onclick = function () {
  //check the input field not empty
  if (input.value !== "") {
    addTaskToArray(input.value); //add task to array of tasks
    input.value = ""; //empty the input field after adding the task
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("delAll")) {
    delAll(window.localStorage.getItem("tasks"));
    e.target.remove();
  }

  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  //task desc
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  //push task to the array of task
  arrayOfTasks.push(task);
  // console.log(arrayOfTaska);

  //function to add tasks to page from array of  tasks
  addTasksToPage(arrayOfTasks);

  //add tasks to local storage
  addTaskLS(arrayOfTasks);
}

function addTasksToPage(arrayOfTasks) {
  //empty tasks div
  tasksDiv.innerHTML = "";
  //looping on array of tasks
  arrayOfTasks.forEach((task) => {
    //create main div for tasks
    let div = document.createElement("div");
    div.className = "task";
    //check if class is done
    if (task.completed == true) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // console.log(div);

    //create delete button
    let span = document.createElement("span");
    span.className = "del";
    //append button to main div
    span.appendChild(document.createTextNode("delete"));
    div.appendChild(span);
    //add main div to tasks container
    tasksDiv.appendChild(div);
  });
  let delAll = document.createElement("button");
  delAll.className = "delAll";
  delAll.appendChild(document.createTextNode("Delete All"));
  tasksDiv.appendChild(delAll);
}

function addTaskLS(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addTasksToPage(tasks);
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addTaskLS(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addTaskLS(arrayOfTasks);
}

function delAll(tasks) {
  tasksDiv.innerHTML = "";
  window.localStorage.removeItem("tasks");
}
