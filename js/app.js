// Get Element Text By function

function getElementTextById(elementId, buttonId) {
    const elementFieldId = document.getElementById(elementId, buttonId);
    const elementField = elementFieldId.innerText;
    return elementField;
}

// Set Element Text By function
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
            createNewList.className = 'pt-2 font-bold'
            createNewList.innerText = titelText;
            getCurrentText.appendChild(createNewList);
            const disableBtnID = document.getElementById(buttonId);
            disableBtnID.setAttribute('disabled', '');
            disableBtnID.style.backgroundColor = 'gray';
            disableBtnID.style.color = 'white';
        }
}

// Call All Event handler from here

document.getElementById('player-btn-1').addEventListener('click', function () {
    setElementTextById('titel-text-1', 'player-btn-1');
});

document.getElementById('player-btn-2').addEventListener('click', function () {
    setElementTextById('titel-text-2', 'player-btn-2')
});
document.getElementById('player-btn-3').addEventListener('click', function () {
    setElementTextById('titel-text-3', 'player-btn-3')
});
document.getElementById('player-btn-4').addEventListener('click', function () {
    setElementTextById('titel-text-4', 'player-btn-4')
});
document.getElementById('player-btn-5').addEventListener('click', function () {
    setElementTextById('titel-text-5', 'player-btn-5')
});
document.getElementById('player-btn-6').addEventListener('click', function () {
    setElementTextById('titel-text-6', 'player-btn-6')

});
document.getElementById('player-btn-7').addEventListener('click', function () {
    setElementTextById('titel-text-7', 'player-btn-7');
});

document.getElementById('player-btn-8').addEventListener('click', function () {
    setElementTextById('titel-text-8', 'player-btn-8')
});
document.getElementById('player-btn-9').addEventListener('click', function () {
    setElementTextById('titel-text-9', 'player-btn-9')
});
document.getElementById('player-btn-10').addEventListener('click', function () {
    setElementTextById('titel-text-10', 'player-btn-10')
});
document.getElementById('player-btn-11').addEventListener('click', function () {
    setElementTextById('titel-text-11', 'player-btn-11')
});
document.getElementById('player-btn-12').addEventListener('click', function () {
    setElementTextById('titel-text-12', 'player-btn-12')

});