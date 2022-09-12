const form = document.getElementById("form");

const ulGroup = document.getElementById("expense-group");

const editButton = document.getElementsByClassName('editbtn');

const deleteButton = document.getElementsByClassName('deletebtn');
console.log(deleteButton);
// deleteButton.className = 'deletebtn';
// editButton.className = 'editbtn';


form.addEventListener("submit", addExpense);
const amount = document.getElementById("amountVal");
const description = document.getElementById("descVal");
const category = document.getElementById("category");







const apiCall = function call() {
    axios('https://crudcrud.com/api/6c5a1f874b4645418c049589f24d92d3/add').then(resp => {
        resp.data.map(item => {

            const li = document.createElement('li');
            const editbtn = document.createElement('button');

            const deletetbtn = document.createElement('button');
            deletetbtn.appendChild(document.createTextNode('Delete Expense'))
            deletetbtn.className = 'deletebtn';
            editbtn.className = 'editbtn';
            editbtn.appendChild(document.createTextNode('Edit Expense'))
            li.appendChild(document.createTextNode(`${item.myamount} s - ${item.mycat} - ${item.mydesc} `));


            li.appendChild(deletetbtn)
            li.appendChild(editbtn)
            ulGroup.appendChild(li)


            deletetbtn.addEventListener('click', deleteItem)
            function deleteItem() {
                axios.delete(`https://crudcrud.com/api/6c5a1f874b4645418c049589f24d92d3/add/${item._id}`)
            }
            editbtn.addEventListener('click', editItem)

            function editItem() {
                amount.value = item.myamount
                description.value = item.mydesc
                category.value = item.mycat
                axios.delete(`https://crudcrud.com/api/6c5a1f874b4645418c049589f24d92d3/add/${item._id}`)
            }

        })






    })
}

apiCall();

// Object.keys(localStorage).map(key => {
//     const li = document.createElement('li');
//     const editbtn = document.createElement('button');

//     const deletetbtn = document.createElement('button');
//     deletetbtn.appendChild(document.createTextNode('Delete Expense'))
//     deletetbtn.className = 'deletebtn';
//     editbtn.className = 'editbtn';
//     editbtn.appendChild(document.createTextNode('Edit Expense'))
//     li.appendChild(document.createTextNode(key));

//     li.appendChild(deletetbtn)
//     li.appendChild(editbtn)

//     // console.log(li);
//     ulGroup.appendChild(li)
// })

// ulGroup.addEventListener('click', deleteitem)
// // console.log(ulGroup);
// function deleteitem(e) {
//     if (e.target.className.contains('deletebtn')) {
//         e.target.parentElement.remove();
//     }



// }


function addExpense(e) {
    e.preventDefault();

    const myamount = amount.value;
    const mydesc = description.value;
    const mycat = category.value;

    console.log(myamount, mydesc, mycat);


    // console.log(amount, description, category.value);

    const expensesObj = {
        myamount, mydesc, mycat
    }
    // localStorage.setItem(`${myamount}${mydesc}`, JSON.stringify(expensesObj))

    axios.post('https://crudcrud.com/api/6c5a1f874b4645418c049589f24d92d3/add', expensesObj).then(res => console.log(res)).catch();

    // apiCall();
}