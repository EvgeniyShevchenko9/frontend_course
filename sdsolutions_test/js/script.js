/*настройка модального окна ModalWindow01*/
const ModalWindow01 = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false/*опция модального окна: не скрываем скроллбары страницы под модальным окном, если они есть*/
});

/*настройки событий на элементы управления приложением*/
button_add.addEventListener("click", AddButtonClicked);
trigger.addEventListener("click", OpenBurgerMenu);
button_sortbyname.addEventListener("click", TryToCloseBurgerMenu);
button_sortbyvalue.addEventListener("click", TryToCloseBurgerMenu);
button_clearlist.addEventListener("click", ClearListButtonClicked);
button_showasXML.addEventListener("click", TryToCloseBurgerMenu);

/*дополнительный ивент для удобства пользования приложением:*/
button_showasXML.addEventListener("keydown", event => {
    if (event.keyCode === 9) { TryToCloseBurgerMenu(); }; });
/*при переборе элементов управления клавиатурой, т.е. клавишей Tab, при уходе с последнего пункта меню этой клавишей (её KeyCode - 9) - также попытаться закрыть бургер-меню (меню закроется если оно показано классом show, т.е используется мобильная версия)*/

window.onclick = CheckWhereIsFocus;/*проверка необходимости закрыть бургер-меню при клике где-либо в окне браузера*/
window.onload = DisplayArr;

/*описания констант, переменных, функций*/
let arr = [];/*основной массив, в котором хранятся все пары, введённые пользователем*/

arr = [{Name : "alpha", Value: "beta"}, {Name : "aaa", Value: "bbb"}, {Name : "AAA", Value: "BBB"}, {Name : "alpha", Value: "beta"}, {Name : "aaa", Value: "bbb"}, {Name : "AAA", Value: "BBB"}];/*готовый массив для тестирования*/

function DisplayArr() {/*отображение текущего состояния массива arr в displayarea*/
    let areaHTML = "";
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj = arr[i];
        areaHTML += obj.Name + "=" + obj.Value + "<br>";
    }
    document.getElementById("displayarea").innerHTML = areaHTML;
}

function AddButtonClicked() {
    let input = document.getElementById("user_input").value;
    
    let AllowedCharacterSet = /[^A-Za-z0-9 =]/;
    if (AllowedCharacterSet.test(input)) {
        /*если в введённой строке содержится ещё что-то кроме допустимых символов*/
        alert("Unable to add a pair: only characters a...z, A...Z, 0...9, '=' and 'space' are allowed.");
        document.getElementById("user_input").focus();
        return;
    };
    
    let EqualCharNumber = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "=") { EqualCharNumber++; }
    };
    if (!(EqualCharNumber === 1)) {
        /*если в введённой строке символов "=" не в точности 1*/
        alert("Check your input: there must be exactly 1 'equal' character.");
        document.getElementById("user_input").focus();
        return;
    };
    
    let inputName = input.substr(0, input.indexOf('='));/*всё до знака равно*/
    let inputValue = input.substr(input.indexOf('=')+1);/*всё после знака равно*/
    
    inputName = inputName.replace(/\s*$/,"");/*убрать все пробелы из inputName в конце - они допустимы*/
    inputValue = inputValue.replace(/^\s*/,"");/*убрать все пробелы из inputValue в начале - они допустимы*/
    
    /*если inputName или inputValue получились пустыми - то ввод некорректен*/
    if ((inputName==="") || (inputValue==="")) {
        alert("The syntax is incorrect: Name or Value cannot be empty.");
        document.getElementById("user_input").focus();
        return;
    }
    
    /*если сейчас в inputName или в inputValue содержится хотя бы один пробел - то ввод некорректен*/
    if ((inputName.indexOf(" ") >= 0) || (inputValue.indexOf(" ") >= 0)) {
        alert("The syntax is incorrect: extra spaces were entered. All spaces have been removed from the input.");
        input = input.replace(/\s+/g, '');/*убираем все пробелы из ввода*/
        document.getElementById("user_input").value = input;
        document.getElementById("user_input").focus();
        return;
    }
    
    /*все проверки пройдены, добавляем пару как объект в массив arr, в начало*/
    arr.unshift({Name : inputName, Value: inputValue});
    DisplayArr();
    document.getElementById("user_input").focus();

}/*конец функции AddButtonClicked*/

/*при нажатии на кнопку (trigger) вызова содержимого бургер-меню*/
function OpenBurgerMenu() {
    document.getElementById("menu_items").classList.toggle("show");
    /*классом show показываем/убираем содержимое бургера; изначально содержимое бургер-меню скрыто*/
}

function TryToCloseBurgerMenu() {
    let elem = document.getElementById("menu_items");
    if ( elem.classList.contains("show") ) { elem.classList.toggle("show"); }
/*    при клике на пункт меню: если пункт показан классом show (то есть страница отображается в мобильной версии), тогда скрыть всё меню; при просмотре страницы на десктопе - класс show не появляется, и при клике на кнопку меню - меню скрывать не нужно*/
}

function CheckWhereIsFocus() {/*если фокус куда-либо уходит с бургер-меню, - то закрыть меню*/
    let FocusedElement = document.activeElement;
    if (!( document.getElementById("trigger") === FocusedElement || document.getElementById("button_sortbyname") === FocusedElement || document.getElementById("button_sortbyvalue") === FocusedElement || document.getElementById("button_clearlist") === FocusedElement || document.getElementById("button_showasXML") === FocusedElement )) { TryToCloseBurgerMenu(); }
}

function ClearListButtonClicked() {
    arr = [];
    TryToCloseBurgerMenu();
    DisplayArr();
}
