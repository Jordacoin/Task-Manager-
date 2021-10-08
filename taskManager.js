const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {

    const html = `<div id=${id} class="col-sm-3">
                       <div class="card" style="width: 18rem;">
                           <div class="card-body">
                               <h6 class="card-title">Name: ${name} </h6>
                               <span class="card-subtitle mb-2 text-muted">Due Date: ${dueDate} </span>
                               <h6 class="card-subtitle">Description: ${description} </h6>
                               <h6 class="">Assigned To: ${assignedTo} </h6>
                               <h6 class="status">Status : ${status} </h6>
                               <button type='button' class='done-button'>Complete</button>
                               <button type='button' class='delete-button'>Delete</button>
                           </div>
                       </div>
                   </div>`
   
   return html
   }
   
   
   class TaskManager {
       constructor(currentID=0) {
           this.tasks = [],
           this.currentID = currentID;
       }
       addTask(name, description, assignedTo, dueDate) {
           let task = {
               id: this.currentID++,
               name: name,
               description: description,
               assignedTo: assignedTo,
               dueDate: dueDate,
               status: 'TODO'
           }
           this.tasks.push(task);
           // this.currentID++;
       }
   
       render() {
       const tasksHtmlList = [];
       for(let i=0; i<this.tasks.length;i++) {
           let currentTask = this.tasks[i]
           const date = new Date(currentTask.dueDate);
           const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, currentTask.dueDate, currentTask.status)
           
            tasksHtmlList.push(taskHtml);
           }
       const tasksHtml = tasksHtmlList.join('\n');
       document.getElementById('taskContainer').innerHTML=tasksHtml
       }
     
       getTaskById(taskId) {
           let foundTask 
           for(let i=0; i<this.tasks.length; i++) {
               const task = this.tasks[i];
               if(task.id == taskId) {
                   foundTask = task;
               }
               
           }
           return foundTask
       }
   
       // task 8
       save() {
          const tasksJson = JSON.stringify(this.tasks);
          localStorage.setItem('tasks', tasksJson);
   
          const currentId = this.currentID.toString();
          localStorage.setItem('currentId', currentId);
   
       }
   
       load () {
           if(localStorage.getItem('tasks')) {
               let tasksJson = localStorage.getItem('tasks');
               this.tasks = JSON.parse(tasksJson);
           }
           if(localStorage.getItem('currentId')) {
               let currentId = localStorage.getItem('currentId');
               this.currentId = parseInt(currentId);
           }
          
       }
   
   
   
   
      // task 9
       deleteTask(taskId) {
           const newTask = [];
           for(let i=0; i<this.tasks.length; i++);
           if (task.id != taskId) {
               task.push(newTask)
               newTask = this.tasks;
           }
       }
   }