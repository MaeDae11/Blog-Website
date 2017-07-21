// when hamburger menu is clicked:
// 1. hamburger icon goes to display: none;
// 2. cross icon goes to display: unset;
// 3. menu goes from display: none to display: unset;



var $MENU_CONTAINER = $('[data-text-role="menu"]')
var $EXIT_ICON = $('[data-image-role="exit-container"]')
var $HAMBURGER = $('[data-image-role="hamburger"]')
var $ICON_BUTTON = $('[data-role="iconButton"]')


$EXIT_ICON.hide();
$MENU_CONTAINER.hide();

function clickMenuButton(){
    $HAMBURGER.click(function (){
        $(this).hide();
        $EXIT_ICON.show();
        $MENU_CONTAINER.show("slow")
    });
}

function clickExitButton(){
    $EXIT_ICON.click(function (){
        $HAMBURGER.show();
        $(this).hide();
        $MENU_CONTAINER.hide("slow");
    });
}


clickMenuButton();
clickExitButton();

$MENU_CONTAINER.toggleClass('.menu-container', '.menu-container-on');
$HAMBURGER.toggleClass('.hamburger', '.icon');
$EXIT_ICON.toggleClass('.icon', '.exit');