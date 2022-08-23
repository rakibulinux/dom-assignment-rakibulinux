function getElementTextById(elementId, buttonId) {
    const elementFieldId = document.getElementById(elementId, buttonId);
    const elementField = elementFieldId.innerText;
    return elementField;
}

function setElementTextById(elementId, buttonId) {
    let list = document.querySelector(".player-items"),
        listItems = list.getElementsByTagName("li"),
        itemsLength = listItems.length;
        if (itemsLength >= 5) {
            alert("You can't select more then 5 players");
        } else {
            const titelText = getElementTextById(elementId);
            const getCurrentText = document.getElementById('add-selected-player');
            const createNewList = document.createElement('li');
            
            createNewList.innerText = titelText;
            getCurrentText.appendChild(createNewList);
            const disableBtnID = document.getElementById(buttonId);
            disableBtnID.setAttribute('disabled', '');
            disableBtnID.style.backgroundColor = 'gray';
            disableBtnID.style.color = 'white';
        }
}

document.getElementById('select-1').addEventListener('click', function () {
    setElementTextById('titel-text-1', 'select-1');
});

document.getElementById('select-2').addEventListener('click', function () {
    setElementTextById('titel-text-2', 'select-2')
});
document.getElementById('select-3').addEventListener('click', function () {
    setElementTextById('titel-text-3', 'select-3')
});
document.getElementById('select-4').addEventListener('click', function () {
    setElementTextById('titel-text-4', 'select-4')
});
document.getElementById('select-5').addEventListener('click', function () {
    setElementTextById('titel-text-5', 'select-5')
});
document.getElementById('select-6').addEventListener('click', function () {
    setElementTextById('titel-text-6', 'select-6')

});
document.getElementById('select-7').addEventListener('click', function () {
    setElementTextById('titel-text-7', 'select-7');
});

document.getElementById('select-8').addEventListener('click', function () {
    setElementTextById('titel-text-8', 'select-8')
});
document.getElementById('select-9').addEventListener('click', function () {
    setElementTextById('titel-text-9', 'select-9')
});
document.getElementById('select-10').addEventListener('click', function () {
    setElementTextById('titel-text-10', 'select-10')
});
document.getElementById('select-11').addEventListener('click', function () {
    setElementTextById('titel-text-11', 'select-11')
});
document.getElementById('select-12').addEventListener('click', function () {
    setElementTextById('titel-text-12', 'select-12')

});