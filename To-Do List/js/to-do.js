//new Task
function addTask(){
    var data = document.getElementById("task").value;

    if(data.trim() === ""){
        alert("You can't enter empty line!",'error')
        return;
    }

    var list = document.getElementById("list");
    var newTask = document.createElement("li");    
    newTask.appendChild(document.createTextNode(data));
    newTask.onclick = function(){
        toggleTask(this);
    };
    
    

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");    
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.onclick = function(){
        list.removeChild(newTask);
        // showToast("Task has been deleted from the list!",'success');
    }    
    
    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    document.getElementById("task").value="";
    // showToast("New task has been added to list!",'success');
    
    
}

//old List

var listElements = document.querySelectorAll("#list li");

listElements.forEach(function(element){

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.appendChild(document.createTextNode("X"));

    deleteButton.onclick = function(){
        element.remove();
    }   
    element.appendChild(deleteButton);
    
});


//finished Task

function toggleTask(element){
    element.classList.toggle("taskCompleted");
}


//toast
// var toastElement = document.getElementById("myToast");
// var toast = new bootstrap.Toast(toastElement,{
//     Animation:true,    
// });
    
// function showToast(message, type) {
//     var toastId = type === 'success' ? 'liveToastSuccess' : 'liveToastError';
//     var toastElement = document.getElementById(toastId);
//     var toast = new bootstrap.Toast(toastElement);
//     var toastBody = toastElement.querySelector(".toast-body");
//     toastBody.textContent = message;
//     toast.show();
// }