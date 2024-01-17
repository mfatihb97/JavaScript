//new Task
function addTask(){
    let data = document.getElementById("task").value;

    if(data.trim() === ""){
        alert("You can't enter empty line!")
        return;
    }

    let list = document.getElementById("list");
    let newTask = document.createElement("li");    
    newTask.appendChild(document.createTextNode(data));
    newTask.onclick = function(){
        toggleTask(this);
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");    
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.onclick = function(){
        list.removeChild(newTask);                  
       
    }    
    
    newTask.appendChild(deleteButton);
    list.appendChild(newTask);

    document.getElementById("task").value="";    
     
    
}

//old List

let listElements = document.querySelectorAll("#list li");

listElements.forEach(function(element){

    let deleteButton = document.createElement("button");
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

