function getPlayerListLength(){
    let list = document.querySelector(".player-items"),
    listItems = list.getElementsByTagName("li"),
    itemsLengthString = listItems.length;
    const itemsLength = parseInt(itemsLengthString);

    const perPlayerCostInputElement = document.getElementById('per-player-cost');
    const perPlayerCostInputString = perPlayerCostInputElement.value;
    const perPlayerCostInput = parseInt(perPlayerCostInputString)
    const totalPerPlayerCost = parseInt(perPlayerCostInput * itemsLength);


    const perPlayerExpensesElement = document.getElementById('per-player-expenses');
    perPlayerExpensesElement.innerText = totalPerPlayerCost
    return totalPerPlayerCost;
}

function getStaffCost(){
    
    // manager-cost
    const perManagerCostInputElement = document.getElementById('manager-cost');
    const perManagerCostInputString = perManagerCostInputElement.value;
    const perManagerCostInput = parseInt(perManagerCostInputString);

    // Coach Cost
    const perCoachCostInputElement = document.getElementById('coach-cost');
    const perCoachCostInputString = perCoachCostInputElement.value;
    const perCoachCostInput = parseInt(perCoachCostInputString);

    // Calculate Total Cost
    const totalCostsToPay = getPlayerListLength() + perManagerCostInput + perCoachCostInput;
    const totalCostValueElement = document.getElementById('total-cost-value');
    const totalCostValueString = totalCostValueElement.innerText;
    const totalCostValue = parseInt(totalCostValueString);
    const totalCost = totalCostsToPay + totalCostValue;

    // Set Total Cost
    totalCostValueElement.innerText = totalCost
}


// Event Listener

document.getElementById('calculate-total-player-cost-btn').addEventListener('click', function(){
    getPlayerListLength();
});

document.getElementById('calculate-total-cost-btn').addEventListener('click', function(){
    getStaffCost();
})