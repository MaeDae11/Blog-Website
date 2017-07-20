// when hamburger menu is clicked:
// 1. hamburger icon goes to display: none;
// 2. cross icon goes to display: unset;
// 3. menu goes from display: none to display: unset;



var $MENU_CONTAINER = $('[data-text-role="menu"]')
var $EXIT_CONTAINER = $('[data-image-role="exit-container"]')
var $HAMBURGER = $('[data-image-role="hamburger"]')
var $ICON_BUTTON = $('[data-role="iconButton"]')


$EXIT_CONTAINER.hide();
$MENU_CONTAINER.hide();

function clickMenuButton(){
    $HAMBURGER.click(function (){
        $(this).hide();
        $EXIT_CONTAINER.show();
        $MENU_CONTAINER.show("fold", 1000)
    });
}

function clickExitButton(){
    $EXIT_CONTAINER.click(function (){
        $HAMBURGER.show();
        $(this).hide();
        $MENU_CONTAINER.hide("fold", 1000);
    });
}


clickMenuButton();
clickExitButton();

$MENU_CONTAINER.toggleClass('.menu-container', '.menu-container-on');
$HAMBURGER.toggleClass('.hamburger', '.icon');
$EXIT_CONTAINER.toggleClass('.icon', '.exit');