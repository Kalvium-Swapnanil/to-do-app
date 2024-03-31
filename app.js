var activityList = [];
var inputField = document.getElementById("inputField");
var todoListElement = document.getElementById("todoList");
document.getElementById("addButton").onclick = handleAddButtonClick;

function handleAddButtonClick() {
  activityList.push(inputField.value);
  console.log(activityList);
  inputField.value = "";
  displayList();
}

function displayList() {
  todoListElement.innerHTML = "";
  activityList.forEach(function(activity, index) {
    todoListElement.innerHTML +=
      "<li>" +
      activity +
      "<a onclick='editActivity(" +
      index +
      ")'>Edit</a>" +
      "<a onclick='deleteActivity(" +
      index +
      ")'>&times;</a></li>";
  });
}

function deleteActivity(index) {
  activityList.splice(index, 1);
  displayList();
}

function editActivity(index) {
  var newValue = prompt("Please insert your new value");
  activityList.splice(index, 1, newValue);
  displayList();
}
