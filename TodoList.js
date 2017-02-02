var todoBox = document.getElementById("todoBox")
var todoDropBox = document.getElementById("todoDropBox")
var todoButton = document.getElementById("todoButton")
var todoTask = document.getElementById("todoTask")

todoButton.addEventListener("click", function() {
    var task = "<div style= 'color:" + todoDropBox.value + ";'>" + todoBox.value + "</div>"; + "<br>"
    todoTask.innerHTML = todoTask.innerHTML + task
});

todoTask.addEventListener("click", function(evt) {
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
});
