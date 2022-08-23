//Get Player List Length and Calculate Total Cost Per Player By Function

function getPlayerListLength(){
    let list = document.querySelector(".player-items"),
    listItems = list.getElementsByTagName("li"),
    itemsLengthString = listItems.length;
    const itemsLength = parseInt(itemsLengthString);

    const perPlayerCostInputElement = document.getElementById('per-player-cost');
    const perPlayerCostInputString = perPlayerCostInputElement.value;
    const perPlayerCostInput = parseInt(perPlayerCostInputString);
    
    if(isNaN(perPlayerCostInput)){
        alert("Please type a number")
        return;
    }
    const totalPerPlayerCost = parseInt(perPlayerCostInput * itemsLength);


    const perPlayerExpensesElement = document.getElementById('per-player-expenses');
    perPlayerExpensesElement.innerText = totalPerPlayerCost
    return totalPerPlayerCost;
}

// Get Staff Cost By Function
function getStaffCost(){
    
    // Manager Cost
    const perManagerCostInputElement = document.getElementById('manager-cost');
    const perManagerCostInputString = perManagerCostInputElement.value;
    const perManagerCostInput = parseInt(perManagerCostInputString);
    if(isNaN(perManagerCostInput)){
        alert("Please type a number")
        return;
    }

    // Coach Cost
    const perCoachCostInputElement = document.getElementById('coach-cost');
    const perCoachCostInputString = perCoachCostInputElement.value;
    const perCoachCostInput = parseInt(perCoachCostInputString);
    if(isNaN(perCoachCostInput)){
        alert("Please type a number")
        return;
    }
    const totalPerPlayerCost = getPlayerListLength();
    const totalCostsToPay = totalPerPlayerCost + perManagerCostInput + perCoachCostInput;

    // Get Total Cost
    const totalCostValueElement = document.getElementById('total-cost-value');

    // Set Total Cost
    totalCostValueElement.innerText = totalCostsToPay;
}


// Event Listener

document.getElementById('calculate-total-player-cost-btn').addEventListener('click', function(){
    getPlayerListLength();
});

document.getElementById('calculate-total-cost-btn').addEventListener('click', function(){
    getStaffCost();
})