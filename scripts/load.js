let foodOrder = [];




function loadFood(class_) {
    const foodList = [
        {name: 'Food 1', type: 'type 1', calorie: 100, price: 100, id: 1},
        {name: 'Food 2', type: 'type 1', calorie: 100, price: 100, id: 2},
        {name: 'Food 3', type: 'type 1', calorie: 100, price: 100, id: 3},
        {name: 'Food 4', type: 'type 1', calorie: 100, price: 100, id: 4},
        {name: 'Food 5', type: 'type 1', calorie: 100, price: 100, id: 5},
        {name: 'Food 6', type: 'type 1', calorie: 100, price: 100, id: 6},
        {name: 'Food 7', type: 'type 1', calorie: 100, price: 100, id: 7},
        {name: 'Food 8', type: 'type 1', calorie: 100, price: 100, id: 8},
        {name: 'Food 9', type: 'type 1', calorie: 100, price: 100, id: 9},
        {name: 'Food 10', type: 'type 1', calorie: 100, price: 100, id: 10},
        {name: 'Food 11', type: 'type 1', calorie: 100, price: 100, id: 11},
        {name: 'Food 12', type: 'type 1', calorie: 100, price: 100, id: 12},
        {name: 'Food 13', type: 'type 1', calorie: 100, price: 100, id: 13},
        {name: 'Food 14', type: 'type 1', calorie: 100, price: 100, id: 14},
        {name: 'Food 15', type: 'type 1', calorie: 100, price: 100, id: 15},
        {name: 'Food 16', type: 'type 1', calorie: 100, price: 100, id: 16},
        {name: 'Food 17', type: 'type 1', calorie: 100, price: 100, id: 17},
        {name: 'Food 18', type: 'type 1', calorie: 100, price: 100, id: 18},
        {name: 'Food 19', type: 'type 1', calorie: 100, price: 100, id: 19},
        {name: 'Food 20', type: 'type 1', calorie: 100, price: 100, id: 20},
        {name: 'Food 21', type: 'type 1', calorie: 100, price: 100, id: 21},
        {name: 'Food 22', type: 'type 1', calorie: 100, price: 100, id: 22},
        {name: 'Food 23', type: 'type 1', calorie: 100, price: 100, id: 23},
        {name: 'Food 24', type: 'type 1', calorie: 100, price: 100, id: 24},
        {name: 'Food 25', type: 'type 1', calorie: 100, price: 100, id: 25},
        {name: 'Food 26', type: 'type 1', calorie: 100, price: 100, id: 26},
        {name: 'Food 27', type: 'type 1', calorie: 100, price: 100, id: 27},
        {name: 'Food 28', type: 'type 1', calorie: 100, price: 100, id: 28},
        {name: 'Food 29', type: 'type 1', calorie: 100, price: 100, id: 29},
        {name: 'Food 30', type: 'type 1', calorie: 100, price: 100, id: 30}
    ];

    const foodLister = document.querySelector(`${class_}`);

    foodLister.innerHTML = '';
    
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const h1_ = document.createElement('h1');
    
    const parentStyles = getComputedStyle(foodLister);
    table.style.cssText = parentStyles.cssText;

    // Apply styles for evenly spaced table cells
    table.style.tableLayout = 'fixed';
    table.style.width = '100%';
    table.style.padding = '10px';

    h1_.textContent = 'Today`s Menu ';
    h1_.style.position = 'sticky';
    h1_.style.top = '0';
    foodLister.appendChild(h1_);


    foodList.forEach(food => 
    {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdType = document.createElement('td');
        const tdCalorie = document.createElement('td');
        const tdPrice = document.createElement('td');
        const tdCheckbox = document.createElement('td');
        const rowContainer = document.createElement('div');

    rowContainer.style.height = '40px';
    rowContainer.style.padding = '10px';
    rowContainer.style.overflow = 'hidden';
    rowContainer.style.transition = 'transform 0.3s';
    rowContainer.addEventListener('mouseover', () => {
        rowContainer.style.transform = 'scale(1.1)';
    });
    rowContainer.addEventListener('mouseout', () => {
        rowContainer.style.transition = '0s';
        rowContainer.style.transform = 'scale(1)';
    });

    rowContainer.addEventListener('dblclick', () => {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.cursor = 'pointer';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Add your code to handle the selected food price here
            foodOrder.push({food: food.name, price: food.price, id: food.id});
            console.log(foodOrder);
        } else {
            const rem = foodOrder.filter(item => item.id === food.id);
            console.log("Deselecting food: " + JSON.stringify(rem[0].food));
            foodOrder = foodOrder.filter(itemSelect => itemSelect.id !== food.id);
        }
    });

        tdCheckbox.appendChild(checkbox);

        tdName.style.width = '300px';     // Set width to 30px
        tdType.style.width = '200px';     // Set width to 30px
        tdCalorie.style.width = '200px';  // Set width to 30px
        tdPrice.style.width = '200px';    // Set width to 30px

        tdName.textContent = food.name;
        tdType.textContent = food.type;
        tdCalorie.textContent = food.calorie
        tdPrice.textContent = food.price;

        tr.appendChild(tdName);
        tr.appendChild(tdType);
        tr.appendChild(tdCalorie);
        tr.appendChild(tdPrice);
        tr.appendChild(tdCheckbox);

        rowContainer.appendChild(tr);
        tbody.appendChild(rowContainer);
    });

    table.appendChild(tbody);
    foodLister.appendChild(table);
}



function updateButtonValue(newValue, buttonId) {
    const btn = document.getElementById(`${buttonId}`);
    btn.value = newValue; // Update the value of the backButton
    btn.onclick = () => {shift(); rotateBackCard(); transact_()};
}




function orderDetails(class_) {

    updateButtonValue('confirm', 'backButton');

    const cardLocation = document.querySelector('.card');
    const cancelBtn = document.createElement('input');

    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('id', 'cancelButton');
    cancelBtn.setAttribute('value', 'cancel');
    cancelBtn.onclick = () => {shift(); rotateBackCard();};
    cardLocation.appendChild(cancelBtn);

    const orderList = foodOrder;
    
    const orderLister = document.querySelector(`${class_}`);
    orderLister.innerHTML = '';
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const th_h = document.createElement('th');
    const tr_ = document.createElement('tr');
    const tbody = document.createElement('tbody');
    const h1_ = document.createElement('h1');
    
    
    const parentStyles = getComputedStyle(orderLister);
    table.style.cssText = parentStyles.cssText;

    table.style.tableLayout = 'fixed';
    table.style.width = '100%';
    table.style.padding = '10px';

    h1_.textContent = 'Order Details';
    th_h.textContent = h1_.textContent;
    th_h.style.fontSize = '40px';
    th_h.style.textAlign = 'center';
    tr_.appendChild(th_h);
    thead.appendChild(tr_);
    const theadDiv = document.createElement('div');
    theadDiv.appendChild(thead);
    theadDiv.style.backgroundImage = 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #f2f2f2)';
    theadDiv.style.position = 'sticky';
    theadDiv.style.marginTop = '10px';
    theadDiv.style.top = '0';
    theadDiv.style.zIndex = '1';
    table.appendChild(theadDiv);
    
    let count = 1;
    orderList.forEach(order => {
        const tr = document.createElement('tr');
        const tdFood = document.createElement('td');
        const tdPrice = document.createElement('td');
        const index = document.createElement('td');
        
        index.textContent = `${count}.`; count++;
        tdFood.textContent = order.food;
        tdPrice.textContent = 'KSh.' + order.price;

        index.style.width = '30px';
        tdFood.style.width = '500px';
        tdPrice.style.width = '50px';

        tr.appendChild(index);
        tr.appendChild(tdFood);
        tr.appendChild(tdPrice);

    const rowContainer = document.createElement('div');
    rowContainer.style.height = '40px';
    rowContainer.style.padding = '10px';
    rowContainer.style.overflow = 'hidden';
    

    rowContainer.appendChild(tr);
    tbody.appendChild(rowContainer);
    });
    
    const tfoot = document.createElement('tfoot');
    const td_f = document.createElement('td');
    const total = document.createElement('td');
    const tr_f1 = document.createElement('tr');
    td_f.textContent = 'Total:'; 
    td_f.style.width = '500px';

    function getTotal() {
        let cost = Number(0);
        orderList.forEach(item => cost += item.price);
        return Number(cost);
    }

    total.textContent = `KSh.${getTotal()}`;

    tr_f1.appendChild(td_f);
    tr_f1.appendChild(total);
    tr_f1.style.fontSize = '20px';

    const lipaMessage = document.createElement('td');
    const tr_f2 = document.createElement('tr');
    lipaMessage.textContent = 'LIPA NA MPESA';
    lipaMessage.style.textAlign = 'center';
    lipaMessage.style.fontSize = '40px';
    lipaMessage.style.padding = '10px';

    tr_f2.appendChild(lipaMessage);
    tr_f2.style.display = 'flex';

    const payInfo = document.createElement('td');
    const payNumber = document.createElement('td');
    const containInfo = document.createElement('div');
    const tr_f3 = document.createElement('tr');
    payInfo.textContent = 'Buy goods Till Number:';
    payInfo.style.width = '150px';
    payNumber.textContent = `${560671}`;
    containInfo.appendChild(payInfo);
    containInfo.appendChild(payNumber);
    containInfo.style.padding = '40px';

    tr_f3.appendChild(containInfo);

    const td_contactMessage = document.createElement('td');
    const td_contactInfoInput = document.createElement('td');
    const contactMessage = document.createElement('label');
    const contactInfoInput = document.createElement('input');
    const contactInfoTr = document.createElement('tr');
    const contactDiv = document.createElement('div');
    contactMessage.textContent = 'Enter Mpesa Number:';
    contactMessage.setAttribute('for', 'phone');
    contactInfoInput.setAttribute('type', 'tel');
    contactInfoInput.setAttribute('id', 'phone');
    contactInfoInput.setAttribute('name', 'phone');
    contactInfoInput.setAttribute('pattern', '[0-9]{10}');
    contactInfoInput.setAttribute('required', '');

    td_contactMessage.appendChild(contactMessage);
    td_contactInfoInput.appendChild(contactInfoInput);
    contactInfoTr.appendChild(td_contactMessage);
    contactInfoTr.appendChild(td_contactInfoInput);
    contactDiv.appendChild(contactInfoTr);

    tfoot.appendChild(tr_f1);
    tfoot.appendChild(tr_f2);
    tfoot.appendChild(tr_f3);
    tfoot.appendChild(contactDiv);
    tfoot.style.position = 'sticky';
    tfoot.style.top = '0';
    tfoot.style.bottom = '0';

    table.appendChild(tbody);
    orderLister.appendChild(table);
    orderLister.appendChild(tfoot);
}