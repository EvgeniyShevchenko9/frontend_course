function ShowHideForm() {
    if (document.getElementById("TaskForm").style.display=="none")
        {document.getElementById("TaskForm").style.display="block";}
    else {document.getElementById("TaskForm").style.display="none";};
}

function CurrentDateTimeString() {
    let d = Date();
    return d.substr(8,2) + "/" + d.substr(4,3) + "/" + d.substr(11,10);
}

document.getElementById("NewTaskButtonID").addEventListener('click', NewTaskFromForm);

function NewTaskFromForm(event) {
    event.preventDefault();
    let FormClone = document.forms["NewTaskForm"];
    function GetTaskDateTime () {
        // если дата и время не выбраны в форме - использовать текущую дату и время
        let result = "";
        let dt = FormClone.elements["DateTime"].value;
        if (dt == "") {
            result = CurrentDateTimeString();
        } else {
            let m = "";
            switch (dt.substr(5,2)) {
                case "01": m = "Jan"; break;
                case "02": m = "Feb"; break;
                case "03": m = "Mar"; break;
                case "04": m = "Apr"; break;
                case "05": m = "May"; break;
                case "06": m = "Jun"; break;
                case "07": m = "Jul"; break;
                case "08": m = "Aug"; break;
                case "09": m = "Sep"; break;
                case "10": m = "Oct"; break;
                case "11": m = "Nov"; break;
                case "12": m = "Dec"; break;
                    }
            result = dt.substr(8,2) + "/" + m + "/" + dt.substr(0,4) + " " + dt.substr(11,5);
        };
        return result;
    }
    let t = FormClone.elements["TaskDescription"].value;
    if (t == "") { t = "\(empty task description\)"};
    CreateNewTask(GetTaskDateTime(), t, FormClone.elements["TaskColor"].value); // создаём новый элемент с данными из формы
    FormClone.elements["TaskDescription"].value = ""; // очищаем зону ввода текста в форме
}

function CreateNewTask (datetime, descr, taskcolor) {
    let newTask = document.createElement("div");
    newTask.classList.add("task-container"); // создание div-контейнера с классом "task-container"
	let span1 = document.createElement("span");
    span1.classList.add("task-time");
    span1.innerText = datetime;
    newTask.appendChild(span1); // добавление спана с датой и временем
    let span2 = document.createElement("span");
    span2.classList.add("task-descr");
    span2.innerText = descr;
    newTask.appendChild(span2); // добавление спана с описанием таска
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("buttons-section");
    let btn1 = document.createElement("button");
    btn1.classList.add("task-button", "button-done");
    btn1.innerText = "Done";
    btn1.onclick = ClickDone;
    let btn2 = document.createElement("button");
    btn2.classList.add("task-button", "button-delete");
    btn2.innerText = "Delete";
    btn2.onclick = ClickDelete;
    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2); // добавление кнопок в блок кнопок
    newTask.appendChild(btnDiv); // добавление всего блока кнопок в таск
    newTask.style.borderColor = taskcolor;    
    document.getElementById("tasks-to-do").insertBefore(newTask, document.getElementById("tasks-to-do").firstChild); // добавление готового таска newTask перед первым элементом в див id="tasks-to-do"
}

function DeleteContainer (obj) {
    let deletedObj = "";
    let FirstParent = obj.parentElement; // див секция
    let SecondParent = FirstParent.parentElement; // таск контейнер
    if (SecondParent.parentNode) {
        deletedObj = SecondParent.parentNode.removeChild(SecondParent);
    }; // удаление именно этого таск контейнера
    return deletedObj;
}

function ClickDelete () {DeleteContainer(this);} // просто удаляем кликнутый таск контейнер без сохранения

function ClickDone () {
    let movedObj = DeleteContainer(this); // одновременно удаляем и сохраняем удалённый таск контейнер
    movedObj.querySelector(".task-time").classList.add("opacity60"); // навешиваем опасити на спаны
    movedObj.querySelector(".task-descr").classList.add("opacity60", "line-thr"); // а тут ещё и перечёркиваем
    let BtnRedo = movedObj.querySelector(".button-done"); // заменяем кнопку Done на Redo
    BtnRedo.classList.remove("button-done");
    BtnRedo.classList.add("button-redo");
    BtnRedo.innerText = "Redo";
    BtnRedo.onclick = ClickRedo; // навешиваем события на кнопки
    movedObj.querySelector(".button-delete").onclick = ClickDelete;
    document.getElementById("tasks-completed").insertBefore(movedObj, document.getElementById("tasks-completed").firstChild); // вставляем таск контейнер movedObj в начало "tasks-completed"
}

function ClickRedo () { // обратная процедура к ClickDone
    let movedObj = DeleteContainer(this);
    movedObj.querySelector(".task-time").classList.remove("opacity60");
    movedObj.querySelector(".task-descr").classList.remove("opacity60", "line-thr");
    let BtnDone = movedObj.querySelector(".button-redo");
    BtnDone.classList.remove("button-redo");
    BtnDone.classList.add("button-done");
    BtnDone.innerText = "Done";
    BtnDone.onclick = ClickDone;
    movedObj.querySelector(".button-delete").onclick = ClickDelete;
    document.getElementById("tasks-to-do").insertBefore(movedObj, document.getElementById("tasks-to-do").firstChild); // вставляем таск контейнер movedObj в начало "tasks-to-do"
}

// автоматическое добавление демо задач после полной загрузки страницы
// можно совсем убрать из кода
window.addEventListener('load', (event) => {
    CreateNewTask (CurrentDateTimeString(), "-demo task- Start to feel like a part of the Universe", "#3812e3");
    CreateNewTask (CurrentDateTimeString(), "-demo task- Make a million dollars", "#078f39");
    CreateNewTask (CurrentDateTimeString(), "-demo task- Finish this homework", "#e3db44");
    CreateNewTask (CurrentDateTimeString(), "-demo task- Feed the kitten", "#e36444");
})
