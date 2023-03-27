let addtask = document.getElementById("addtask");
let input = document.getElementById("input");
let todolist = document.getElementById("todolist");


addtask.addEventListener('click',function(event){
    event.preventDefault();


    let task = input.value;

    let list = document.createElement("li");
    list.classList.add('list');

    let complete = document.createElement("button");
    complete.classList.add('complete')
    complete.innerHTML = "com";

    let edit = document.createElement("button");
    edit.classList.add('edit')
    edit.innerHTML = "edit";

    let del = document.createElement("button");
    del.classList.add('del')
    del.innerHTML = "del"
   

    list.innerHTML = task ;

    todolist.appendChild(list)
    input.value ='';
    console.log(list);
    
   
    list.appendChild(complete)
    list.appendChild(edit)
    list.appendChild(del)
    

    del.addEventListener('click',()=>{
        list.remove()
    });

    edit.addEventListener('click',()=>{
       
       let editvalue= prompt('edit the select item', list.firstChild.nodeValue);
       list.firstChild.nodeValue = editvalue;
      
        
    })

    complete.addEventListener('click',()=>{
       
        list.style.textDecoration='line-through';
    })

})