//new Task
function addTask(){
    var data = document.getElementById("task").value;

    if(data.trim() === ""){
        alert("You can't enter empty line!")
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
        alert("Task has been deleted from the list")              
       
    }    
    
    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    document.getElementById("task").value="";
    
    alert("New task has been added to the list!", 'success');    
    
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

