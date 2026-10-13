const tasks = []
let completedTaskCount = 0;

function setTask(title, description, isCompleted) {
    if (isCompleted = false) {
        const task = {
            title: title,
            description: description,
            isCompleted: isCompleted,
            createdDate: new Date(),
            completedDate: new Date()
        }
        tasks.push(task);
    } else {
        const task = {
            title: title,
            description: description,
            isCompleted: isCompleted,
            createdDate: new Date(),
            completedDate: null
        }
        tasks.push(task);
    }
}

function showTask() {
    let count = 1
    tasks.forEach(element => {
        console.log(`Задача номер №${count}`)
        Object.values(element).forEach(element => { console.log(element) })
        count += 1;
    });
}

function completeTask(index) {
    if (tasks[index].isCompleted === true) {
        console.log('Задача уже завершена!')
    } else {
        tasks[index].isCompleted = true;
        tasks[index].completedDate = new Date();
        completedTaskCount += 1;
    }
}
function deleteTask(index) {
    if (tasks[index].isCompleted === false) {
        const answer = confirm('Таска еще не выполнена, удалить?');
        if (answer) {
            tasks.splice(index, 1);
        } 
    } else {
        tasks.splice(index, 1);
    }
}

function clearTasks() {
    tasks.length = 0;
}

