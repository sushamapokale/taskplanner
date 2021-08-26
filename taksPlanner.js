const fs=require('fs');
const { exit } = require('process');
const prompt = require('prompt-sync')();
 function addTask()
 {
    

        console.log("Enter you task");
        const task = prompt('');
        let fileData = fs.readFileSync("data1.txt","utf-8");
        let data = []; 
        data=fileData.split('\n');
        fs.writeFileSync("data1.txt",fileData+'\n'+task);   
        console.log("task added");

 }

 function deleteTask()
 {
    
      
        console.log("Enter the index of task that is to be deleted");
        console.log("(index starts from 0)");
          const deleteIndex= prompt('');
         //read data from file
         let fileData = fs.readFileSync("data1.txt","utf-8");
         let data = []; 
         data = fileData.split('\n');
           
         // Filter the data for any empty lines
         let filterData = data.filter(function (value) {
           return value !== ''; 
         });
           
         // If delete index is greater than no. of task 
         // or less than zero
         if (deleteIndex > filterData.length-1 || deleteIndex < 0) {
           console.log(
             'Error: task #' + deleteIndex 
                 + ' does not exist. Nothing deleted.',
           );   
         } else {
       
           // Remove the task
           filterData.splice(deleteIndex, 1); 
           //Join the array to form a string
           const newData = filterData.join('\n'); 
           const data=fs.writeFileSync("data1.txt",newData);
           console.log('Deleted todo #' + deleteIndex); 
             
           

            
         }
       }
 

 function showTask()
 {
    const fileData = fs.readFileSync("data1.txt","utf-8");
    console.log(fileData);

}

let choice;
do{
    console.log("Task Planner");
console.log("Press 1 to ADD");
console.log("Press 2 to DELETE");
console.log("Press 3 to SHOW");
console.log("Press 4 to EXIT")

 choice = prompt('What is your choice?');

if(choice==1)
addTask();
else if(choice==2)
deleteTask();
else if(choice==3)
showTask();
else if(choice==4)
exit();
else
console.log("invalid choice");

}while(choice!=4);