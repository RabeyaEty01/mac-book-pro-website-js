//handle memory events
function memorybutton(isExtraMemory) {
    const memoryField = document.getElementById('memory-cost');
    if (isExtraMemory == true) {
        memoryField.innerText = 180;
    }
    else {
        memoryField.innerText = 0;
    }

    //update extra
    calculateTotal();
    // extra total cost
    extraTotal();

}

//handle storage events
function storageButton(isExtraStorage, storage) {
    const storageField = document.getElementById('storage-cost');
    if (isExtraStorage == true && storage == '512GB') {
        storageField.innerText = 100;
    }

    else if (isExtraStorage == true && storage == '1TB') {
        storageField.innerText = 180;
    }

    else {
        storageField.innerText = 0;
    }
    //update total
    calculateTotal();
    // extra total cost
    extraTotal();
}

// handle shipping events
function shippingButton(isBeforedate) {
    const shippingField = document.getElementById('shipping-cost');
    if (isBeforedate == true) {
        shippingField.innerText = 20;
    }
    else {
        shippingField.innerText = 0;
    }

    //update total
    calculateTotal();
    // extra total cost
    extraTotal();


}

//Total cost events
function getCostValue(product) {
    const costField = document.getElementById(product + '-cost');
    const productCosts = parseInt(costField.innerText);
    return productCosts;
}

function calculateTotal() {
    const memoryTotal = getCostValue('memory');
    const storageTotal = getCostValue('storage');
    const shippingTotal = getCostValue('shipping');
    const costTotal = memoryTotal + storageTotal + shippingTotal;
    const totalPrice = 1299 + costTotal; //1299 is fixed cost without any charges
    //update on the html
    document.getElementById('memory-cost').innerText = memoryTotal;
    document.getElementById('storage-cost').innerText = storageTotal;
    document.getElementById('shipping-cost').innerText = shippingTotal;
    document.getElementById('total-price').innerText = totalPrice;

}

// extra total cost handle
function extraTotal() {
    const extraTotalCost = document.getElementById('extra-total-cost');
    const total = document.getElementById('total-price');
    extraTotalCost.innerText = total.innerText;
}

//memory cost events
document.getElementById('16GB-memory-btn').addEventListener('click', function () {
    memorybutton(true);

});
document.getElementById('8GB-memory-btn').addEventListener('click', function () {
    memorybutton(false);

});

//storage cost events
document.getElementById('256GB-storage-btn').addEventListener('click', function () {
    storageButton(false, '256GB');

});
document.getElementById('512GB-storage-btn').addEventListener('click', function () {
    storageButton(true, '512GB');

});

document.getElementById('1TB-storage-btn').addEventListener('click', function () {
    storageButton(true, '1TB');

});

// shipping cost events
document.getElementById('before-prime-date').addEventListener('click', function () {
    shippingButton(true);

});
document.getElementById('in-prime-date').addEventListener('click', function () {
    shippingButton(false);

});

//extra part
// pomo code events handled
document.getElementById('pomo-code-button').addEventListener('click', function () {
    //get user email
    const inputId = document.getElementById('pomo-code-input');
    const inputField = inputId.value;

    //check email and password
    if (inputField == 'stevekaku') {
        const extraTotalCost = document.getElementById('extra-total-cost');
        const extratotalCostValueText = extraTotalCost.innerText;
        const extratotalCostValue = parseInt(extratotalCostValueText);

        const total = extratotalCostValue - (extratotalCostValue * 0.2);
        extraTotalCost.innerText = total;
    }

    //clear input Field
    inputId.value = '';
});



