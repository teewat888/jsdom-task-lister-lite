document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  document.addEventListener("submit",(e)=>{
      e.preventDefault();
      let newTaskDesc = document.getElementById("new-task-description").value;
      const priority = document.getElementById("priority").value;
      const duedate = document.getElementById("duedate").value;

      //console.log("new task: ",newTaskDesc);
      const tasks = document.getElementById("tasks");

      const task = document.createElement("li");

      
      if (newTaskDesc !== "") {
        
        // generate randow id for button 
        const randomPrefix = Math.floor(Math.random() * 1000) + 1;
        const bPrefix = randomPrefix+newTaskDesc;
        // end random number

        switch (priority) {
          case "High":
            newTaskDesc = "<span style='color:red'>"+newTaskDesc+"</span>";
            break;
          case "Medium":
            newTaskDesc = "<span style='color:yellow'>"+newTaskDesc+"</span>";
            break;
          case "Low":
            newTaskDesc = "<span style='color:green'>"+newTaskDesc+"</span>";
            break;
        }
        const button = document.createElement('button');
        button.innerText = "X";
        console.log("button: ",button);
        //task.innerHTML = duedate+" "+newTaskDesc+" <button id='"+bPrefix+"'>X</button>";
        task.innerHTML = duedate+" "+newTaskDesc;
        console.log("task.innerhtml: ",task.innerHTML);
        task.append(button);
        tasks.appendChild(task);
        //const bx = document.getElementById(bPrefix);
        button.addEventListener('click',(e)=>{
          task.remove();
        });
      }
      
      //alert(`u press ${newTaskDesc}`);
  });
});
