const ModalWindow01 = new HystModal({
    linkAttributeName: "data-hystmodal",
    backscroll: false/*не скрываем скроллбар если есть*/
});


document.getElementById("trigger").onclick = function() { OpenBurgerMenu(); }

function OpenBurgerMenu() {
    document.getElementById("menu_items").classList.toggle("show");
}

function BurgerMenuItemClicked() {
    let obj = document.getElementById("menu_items");
    if ( obj.classList.contains("show") ) { obj.classList.toggle("show"); }
}

function ContactUs_Btn_Click() {
    alert("Contact Us button clicked");
}
