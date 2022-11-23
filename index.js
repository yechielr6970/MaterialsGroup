document.body.children[0].innerText = 'Show Company Form';

let companies = [{
    name : 'Kyocera',
    price : 54.36,
    isUsComapny : false,
//  href="https://www.marketwatch.com/investing/stock/kyocy?mod=search_symbol"
    ticker : 'KYOCY', 
    amount : 0
},{
    name : 'J&J',
    price : 163.36,
    isUsComapny : true,
    ticker : 'JNJ',
    amount : 0
},{
    name : 'Hamilton Beach',
    price : 11.50,
    isUsComapny : true,
    ticker : 'HBB',
    amount : 0
},{
    name : 'Commercial Metals',
    price : 35.48,
    isUsComapny : true,
    ticker : 'CMC',
    amount : 0
}]

ticker += 
function generateTable() {
    // Write code to create the table the list of companies
    let tableBodyElement = document.getElementById('table-body');
    tableBodyElement.innerHTML = null;

    for(let i = 0; i < companies.length; i++){
        var company = companies[i];
        
        let trElement = document.createElement('tr');

        createAndAppendTd(trElement, company.name);
        createAndAppendTd(trElement, company.price);
        createAndAppendTd(trElement, company.amount);
        createAndAppendTd(trElement, company.isUsComapny ? 'Yes' : 'No');
        createAndAppendTd(trElement, company.ticker);


        let btnTd = document.createElement('td');
        let btn = document.createElement('button');
        btnTd.append(btn);
        
        
        btn.innerText = company.amount ? 'Buy More' : 'Buy';

        btn.addEventListener('click', function(){
           buyStock(i);
        });

        trElement.append(btnTd);

        tableBodyElement.append(trElement);
    }
    
}

function createAndAppendTd(trElement, innerText){
    let tdElement = document.createElement('td');
    tdElement.innerText = innerText;
    trElement.append(tdElement);
}

generateTable();


function buyStock(index) {
    // Handle the button click
    let amount = Number(
        prompt(
            `How many ${companies[index].ticker} stocks would you like to buy?`
        )
    );
    if (isNaN(amount)) {
        alert("Invalid amount. Please enter a valid amount.");
    } else {
        companies[index].amount += amount;

        generateTable();
    }
}

function showAddCompanyForm(){
    document.getElementById('addCompanyForm').style.display = 'block';
}

let formElement;
function submitForm(){
    formElement = document.getElementById('addCompanyForm');
    let fd = new FormData(formElement);
    let company = {};
    company.name = fd.get('name');
    company.price = fd.get('price');
    company.isUsComapny = fd.get('isUsCompany') == 'on';
    company.ticker = fd.get('ticker');
    companies.push(company);
    generateTable();
    formElement.reset();
}