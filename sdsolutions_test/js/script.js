/*настройка модального окна ModalWindow01*/
const ModalWindow01 = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false/*опция модального окна: не скрываем скроллбары страницы под модальным окном, если они есть*/
});

/*настройки событий на элементы управления приложением*/
button_add.addEventListener("click", AddButtonClicked);
trigger.addEventListener("click", ToggleBurgerMenu);
button_sortbyname.addEventListener("click", SortByNameButtonClicked);
button_sortbyvalue.addEventListener("click", SortByValueButtonClicked);
button_clearlist.addEventListener("click", ClearListButtonClicked);
button_showasXML.addEventListener("click", ShowAsXMLButtonClicked);
button_copytobuffer.addEventListener("click", CopyToBufferButtonClicked);

/*дополнительный ивент для удобства пользования приложением:*/
button_showasXML.addEventListener("keydown", event => {
    if (event.keyCode === 9) { TryToCloseBurgerMenu(); }; });
/*при переборе элементов управления клавиатурой, т.е. клавишей Tab, при уходе с последнего пункта меню этой клавишей (её KeyCode - 9) - также попытаться закрыть бургер-меню (меню закроется если оно показано классом show, т.е используется мобильная версия)*/

window.onclick = WindowClick;
window.onresize = TryToCloseBurgerMenu;
window.onload = DisplayArr;

/*описания констант, переменных, функций*/
let arr = [];/*основной массив, в котором хранятся все пары, введённые пользователем*/
let BurgerJustOpened = false;

arr = [{Name : "alpha", Value: "gamma"}, {Name : "aaa", Value: "bbb"}, {Name : "AAA", Value: "BBBBBB"}, {Name : "10", Value: "14"}, {Name : "2", Value: "000"}, {Name : "546abc", Value: "31415"}, {Name : "alpha", Value: "beta"}, {Name : "VeryVeryVeryLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONname", Value: "smallValue"}, {Name : "BIGPairNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAME", Value: "00000000000000000000000000000000000000000000000000000000000000000000BIGGESTValue"}];/*готовый массив для тестирования*/

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

}/*конец функции AddButtonClicked*/

/*при нажатии на кнопку (trigger) вызова содержимого бургер-меню*/
function ToggleBurgerMenu() {
    let elem = document.getElementById("menu_items");
    if ( !(elem.classList.contains("showburgerbuttons")) ) { elem.classList.add("showburgerbuttons"); BurgerJustOpened = true; }
    else { elem.classList.remove("showburgerbuttons"); };
    /*классом showburgerbuttons показываем/убираем содержимое бургера; изначально класса showburgerbuttons у menu_items нет*/
}

function TryToCloseBurgerMenu() {
    let elem = document.getElementById("menu_items");
    if ( elem.classList.contains("showburgerbuttons") ) { elem.classList.remove("showburgerbuttons"); };
/*при попытке спрятать кнопки бургер-меню: если кнопки показаны классом showburgerbuttons (то есть страница отображается в мобильной версии), тогда скрыть все кнопки меню; при просмотре страницы на десктопе - класса showburgerbuttons у меню нет, при клике на кнопки меню скрывать их не нужно*/
}

function WindowClick() {/*при любом клике на странице включая и клик по триггеру*/
    if (BurgerJustOpened) { BurgerJustOpened = false; } else { TryToCloseBurgerMenu(); BurgerJustOpened = false; };
}/*кнопки бургер-меню не прячутся при любом клике только если это был клик по триггеру бургер-меню*/

function SortByNameButtonClicked() {
    arr.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
    DisplayArr();
}

function SortByValueButtonClicked() {
    arr.sort((a, b) => (a.Value > b.Value) ? 1 : ((b.Value > a.Value) ? -1 : 0));
    DisplayArr();
}

function ClearListButtonClicked() {
    arr = [];
    DisplayArr();
}

function ShowAsXMLButtonClicked() {
    let XMLresultHTML = "&lt" + "root" + "&gt" + "<br>";
    for (let i = 0; i < arr.length; i++) {
        XMLresultHTML += "&lt" + "Line" + "&gt" + arr[i].Name + "=" + arr[i].Value + "&lt" + "/Line" + "&gt" + "<br>";
    };
    XMLresultHTML += "&lt" + "/root" + "&gt";
    document.getElementById("modal01_content").innerHTML = XMLresultHTML;
}

function CopyToBufferButtonClicked() {
    
    /*подготовка к отображению статуса копирования в буфер*/
    document.getElementById("copy_status").textContent = "";
    
    let elem = document.getElementById("modal01_content");
    elem.setAttribute("contenteditable", true);
    elem.focus;
    SelectElementText(elem);
    try {
        let res = document.execCommand('copy');        
        if (res) { document.getElementById("copy_status").textContent = "Copied successfully."; };
    }
    catch (e) { document.getElementById("copy_status").textContent = "Failed to copy."; };
    elem.setAttribute("contenteditable", false);
    setTimeout(() => { document.getElementById("copy_status").textContent = ""; }, 1000);
    /*очистка содержимого id=copy_status через 1 секунду*/
}

function SelectElementText(el, win) {
    win = win || window;
    let doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}
