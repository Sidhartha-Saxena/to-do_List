// initializing list of task
let tasklist = [];
// elements form html document
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
// getting previously stored task from storage
const taskStorage = JSON.parse(localStorage.getItem("taskList"));

//if there are previously stored tasks render them
if (taskStorage) {
    tasklist = taskStorage;
    render();
}
// adding enter to add 
inputTask.addEventListener('keypress',(e)=>{
    if(e.key=="Enter"){
        btnActionlistner();
    }
})
// adding eventlistener to add btn
addTask.addEventListener('click', btnActionlistner);
// sort function
function compareTasks(a,b){
    if(a.checkButtonStatus==true && b.checkButtonStatus==false){
        return 1;
    }
    if(b.checkButtonStatus==true && a.checkButtonStatus==false){
        return -1;
    }
    return 0;
}
// eventlistener function
function btnActionlistner(){
    if (inputTask.value === "" || tasklist.find(el => el.taskName == inputTask.value) != null) {
        // if input value is repeated or not given error message;
        alert('Please Enter a New Task');

    } else {
        // making object to store in our task list
        let taskObj = { taskName: `${inputTask.value}`, checkButtonStatus: false };
        tasklist.push(taskObj);
        inputTask.value = "";
        // storing tasklist in local storage
        localStorage.setItem("taskList", JSON.stringify(tasklist));
        render();
    }
}
//reder function to display the tasks 
function render() {
    taskContainer.innerText = "";
    tasklist.sort(compareTasks);
    for (let i = 0; i < tasklist.length; i++) {

        let task = document.createElement('div');
        task.classList.add('task');

        let taskContent = document.createElement('span');
        taskContent.innerHTML = tasklist[i].taskName;
        task.appendChild(taskContent);

        let checkButton = document.createElement('button');
        checkButton.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        checkButton.classList.add('checktask');
        let checkButtonState = tasklist[i].checkButtonStatus;

        if (checkButtonState) {
            task.classList.add('checked');
        } else {
            task.classList.remove('checked');
        }
        task.appendChild(checkButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteButton.classList.add('deletetask');
        task.appendChild(deleteButton);

        taskContainer.appendChild(task);

        inputTask.focus();

        checkButton.addEventListener('click', () => {

            let spanvalue = checkButton.previousElementSibling.textContent;
            let ind = tasklist.indexOf(tasklist.find(el => el.taskName == spanvalue));

            if (tasklist[ind].checkButtonStatus == false) {
                // when button is pressed check if check status is false add class and make check status true
                checkButton.parentElement.classList.add('checked');

            } else {
                // else remove class and make check status false
                checkButton.parentElement.classList.remove('checked');

            }

            tasklist[ind].checkButtonStatus = !tasklist[ind].checkButtonStatus;

            localStorage.setItem("taskList", JSON.stringify(tasklist));

            render();

        });

        deleteButton.addEventListener('click', () => {
            // remove obj form task list and then restore task list in local storage
            let spanvalue = deleteButton.previousElementSibling.previousElementSibling.textContent;
            let ind = tasklist.indexOf(tasklist.find(el => el.taskName == spanvalue));

            tasklist.splice(ind, 1);

            localStorage.setItem("taskList", JSON.stringify(tasklist));

            deleteButton.parentElement.remove();

        });
    }
}

// let obj={name:"c1"};
// tasklist.push(obj);
// tasklist.push({name:"c2"});
// tasklist.push({name:"c3"});
// tasklist.push({name:"c4"});
// tasklist.push({name:"c5"});
// tasklist.push({name:"c6"});
// let ind=tasklist.indexOf(tasklist.find(ele=>ele.name=="c4"));
// console.log(tasklist.splice(ind,1));
// console.log(tasklist.at(tasklist.length-1));
