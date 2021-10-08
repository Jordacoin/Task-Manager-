let test = new TaskManager() 
test.load();
test.render();

function validFormFieldInput() {
  const newTaskNameInput = document.querySelector('#taskname');
  const name = newTaskNameInput.value;
  // console.log('name: '+name)
  
  

  const newDescriptionName = document.querySelector('#taskDescription');
  const description = newDescriptionName.value;
  // console.log('description: '+description)

  const newAssignedTo = document.querySelector('#assigned');
  const assignedTo = newAssignedTo.value;
  // console.log('assignedTo: '+assignedTo)

  const newDueDate = document.querySelector('#duedate');
  const dueDate = newDueDate.value;
  // console.log('dueDate: '+dueDate)
  console.log(test.tasks)

  

  test.addTask(name, description, assignedTo, dueDate)
  test.render();
  test.save();

// test.currentID is off by 1
  const taskHtml = createTaskHtml(test.currentID, name, description, assignedTo, dueDate, status)
  

  newTaskNameInput.value = '';
  newDescriptionName.value = '';
  newAssignedTo.value = '';
  newDueDate.value = '';


}

const button = document.querySelector('#btn');
button.addEventListener('click', validFormFieldInput);

const taskList = document.querySelector('#taskContainer');
taskList.addEventListener('click', (event) => {
 if(event.target.classList.contains('done-button')){
    let parentTask = event.target.parentElement.parentElement.parentElement
    console.log(parentTask)
    
    let taskId = parseInt(parentTask.id);
    

    task = test.getTaskById(taskId);
    task.status = 'DONE'
    test.render();
    test.save();
   }
});


// validFormFieldInput();





// console.log(test.tasks)
