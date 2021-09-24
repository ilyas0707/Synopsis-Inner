var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active')

        var panel = this.nextElementSibling
        if (panel.style.display === 'grid') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'grid'
        }
    })
}

let d = document
let menu = d.getElementById('menu'),
    main = d.getElementById('main')
    slider = d.getElementById('slider')

// console.log(checkbox.getAttribute('checked'))

slider.addEventListener('click', () => {
    menu.classList.toggle('active')
    main.classList.toggle('active')
})

let merchantInput = d.getElementById('merchantInput'),
    amountInput = d.getElementById('amountInput'),
    amount = d.getElementById('amount2'),
    merchant = d.getElementById('merchant2')

merchant.oninput = () => {
    merchantInput.innerHTML = merchant.value
}

amount.oninput = () => {
    amountInput.innerHTML = amount.value + ' USD'
}

let count = 3

let addExpense = d.getElementById('addExpense'),
    inner = d.getElementById('inner')

addExpense.addEventListener('click', () => {
    let item = document.createElement('div')
    item.innerHTML = `
        <div class="inner_expense1" style="margin-top: 20px;">
            <h3 class="expense_heading" style="display: inline-block;">
                <span>
                    Expense ${count++} - <span style="display: inline-block; margin: 0 5px;" id="merchantInput"></span><span id="amountInput"></span>
                    <button><img src="./assets/icons/delete.png" alt="delete"></button>
                </span>
            </h3>
            <button class="accordion" style="float: right;"><img src="./assets/icons/arrow_blue.png" alt="arrow_blue"></button>

            <div style="display: grid;">
                <form action="#" class="expense_form">
                    <div class="expense_input">
                        <label for="expenseDate">DATE OF EXPENSE</label>
                        <input type="date" id="expenseDate" required>
                        <!-- <img src="./assets/icons/calendar.png" alt="calendar"> -->
                    </div>
                    <div class="expense_input">
                        <label for="">CATEGORY</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <img style="transform: translateY(-3px) rotate(180deg);" src="./assets/icons/arrow_black.png" alt="arrow_black">
                    </div>
                    <div class="expense_input">
                        <label for="merchant2">Merchant</label>
                        <input type="text" id="merchant2" required>
                    </div>
                </form>

                <form action="#" class="expense_form template">
                    <div class="expense_input">
                        <label for="amount">Amount</label>
                        <input type="number" id="amount2" required>
                    </div>
                    <div class="expense_input">
                        <label for="currency">Currency</label>
                        <select name="" id="currency">
                            <option value="USD">USD</option>
                        </select>
                        <img style="transform: translateY(-3px) rotate(180deg);" src="./assets/icons/arrow_black.png" alt="arrow_black">
                    </div>
                    <div class="expense_input">
                        <label for="paidBy">Paid by</label>
                        <select name="" id="paidBy">
                            <option value=""></option>
                        </select>
                        <img style="transform: translateY(-3px) rotate(180deg);" src="./assets/icons/arrow_black.png" alt="arrow_black">
                    </div>
                    <button>
                        Upload Reciept
                        <img src="./assets/icons/reciept.png" alt="reciept">
                    </button>
                </form>
            </div>
        </div>
    `

    inner.appendChild(item)
})